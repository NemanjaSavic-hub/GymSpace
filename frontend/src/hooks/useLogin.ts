import axios from "axios";
import type { User } from "./useUser";
import { useMutation } from "react-query";

type LoginRequest = {
  email: string;
  password: string;
};

const login = async (data: LoginRequest): Promise<User> => {
  const res = await axios.post<User>(`http://localhost:8080/login`, data);
  return res.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
}