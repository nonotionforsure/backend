import api from "api";
import { IRegister, IAuthenticate, IReturnAuthenticate } from "interfaces/User.interface"

class UserData {
    register(data: IRegister) {
        return api.post<IRegister>('register', data);
    }
    authenticate(data: IAuthenticate) {
        return api.post<IReturnAuthenticate>('authenticate', data);
    }
}

export default new UserData();