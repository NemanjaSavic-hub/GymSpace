import type { User } from "../models/User"

interface LoginAction {
    type: "LOGIN",
    user: User
}

interface LogoutAction {
    type: "LOGOUT"
}

export type AuthAction = LoginAction | LogoutAction

const userReducer = (_state: User, action : AuthAction) => {
    switch(action.type){
        case "LOGIN":
            return action.user;
        case "LOGOUT":
            return {} as User;
        default: 
            throw Error("Impossible action")
    }
}

export default userReducer;