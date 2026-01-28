import axios from "axios"
import { useQuery } from "react-query"
import type { User } from "../models/User";


const useUser = (email: string, password: string, onSuccess: () => void) => {
    console.log(`pozvan useuser sa ${email} i ${password}`)

     const fetchUser = () => 
          axios
              .post<User>(`http://localhost:8080/login`,{
                email,
                password
              })
              .then(res => res.data);
            
    
    return useQuery<User, Error>({
        onSuccess() {
            onSuccess
        },
        queryKey: "user",
        queryFn: fetchUser
    });
    
}

export default useUser;