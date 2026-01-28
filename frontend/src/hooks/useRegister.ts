import axios from "axios";
import type { User } from "../models/User";
import { useMutation } from "react-query";
import { DEV_BASE_URL } from "../constants/constants";

type RegisterRequest = {
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string
};

const register = async (data: RegisterRequest): Promise<User> => {
  const res = await axios.post<User>(`${DEV_BASE_URL}/register`, data);
  return res.data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
}