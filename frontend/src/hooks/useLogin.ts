import axios from "axios";
import { useMutation } from "react-query";
import { DEV_BASE_URL } from "../constants/constants";
import type { LoginResponse } from "../models/LoginResponse";

type LoginRequest = {
  email: string;
  password: string;
};

const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await axios.post<LoginResponse>(`${DEV_BASE_URL}/login`, data);
  return res.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
}