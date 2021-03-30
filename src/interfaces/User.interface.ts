export interface IRegister {
    username: string;
    email: string;
    password: string;
}

export interface IAuthenticate {
    email: string;
    password: string;
}

export interface IReturnAuthenticate {
    token: string;
    user: {
        id: number;
        username: string;
        email: string;
    }
}

export interface IAuthState {
    token: string;
    user: { id: number; username: string; email: string; };
}

export interface IAuthContextData {
    user: { id: number; username: string; email: string; };
    signIn(credentials: IAuthenticate): Promise<void>;
    signOut(): void;
    token: string;
}