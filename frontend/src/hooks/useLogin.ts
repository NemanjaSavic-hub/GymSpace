import axios from "axios";
import { useMutation } from "react-query";
import type { User } from "../models/User";
import { DEV_BASE_URL } from "../constants/constants";

type LoginRequest = {
  email: string;
  password: string;
};

const login = async (data: LoginRequest): Promise<User> => {
  const res = await axios.post<User>(`${DEV_BASE_URL}/login`, data);
  return res.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
}