import axios from "axios"
import { useQuery } from "react-query"

export interface User{
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  password: string
}
//email: string, password: string
const useUser = () => {

    const fetchUser = () => 
        axios
            .get<User>("http://localhost:8080/user/1")
            .then(res => res.data)
    
    return useQuery<User, Error>({
        queryKey: "user",
        queryFn: fetchUser
    });
}

export default useUser;