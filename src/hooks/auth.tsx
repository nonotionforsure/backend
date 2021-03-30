import React, { createContext, useContext, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiUser } from "api/data";
import api from "api";
import { IAuthState, IAuthContextData } from "interfaces/User.interface";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const history = useHistory();
    const [auth, setAuth] = useState<IAuthState>(() => {
        const token = localStorage.getItem("@PUBLIC:key");
        const user = localStorage.getItem("@PUBLIC:user");

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }
        return {} as IAuthState;
    });
    const signIn = useCallback(
        async ({ email, password }) => {
            const response = await apiUser.authenticate({
                email,
                password,
            });
            const { token, user } = response.data;
            setAuth({ token, user });

            localStorage.setItem("@PUBLIC:key", token);
            localStorage.setItem("@PUBLIC:user", JSON.stringify(user));

            api.defaults.headers.authorization = `bearer ${token}`;
            history.push("/");
        },
        [history]
    );

    const removeLocalStorage = () => {
        localStorage.removeItem("@PUBLIC:key");
        localStorage.removeItem("@PUBLIC:user");
    };

    const signOut = useCallback(() => {
        setAuth({} as IAuthState);
        removeLocalStorage();
        api.defaults.headers.authorization = null;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: auth.user,
                signIn,
                signOut,
                token: auth.token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
function useAuth(): IAuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}
export { AuthProvider, useAuth };