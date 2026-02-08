import { useContext } from "react";
import UserContext from "../contexts.ts/UserContext";

const useAuthContext = () => useContext(UserContext);

export default useAuthContext;