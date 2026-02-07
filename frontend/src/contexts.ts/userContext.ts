import { createContext, type Dispatch } from "react";
import type { User } from "../models/User";
import type { AuthAction } from "../reducers/userReducer";


interface UserContextType {
    user: User,
    dispatch: Dispatch<AuthAction>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;