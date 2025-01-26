import apiClient from "../axiosInstance";
import { ILoginData, IRegisterData, IUser } from "../../types/collections/user";

export const register = async (registerData: IRegisterData): Promise<IUser> => {
  const { data: user } = await apiClient.post("/auth/register", registerData);
  return user;
};

export const login = async (loginData: ILoginData): Promise<IUser> => {
  const { data: user } = await apiClient.post("/auth/login", loginData);
  return user;
};

export const logout = async (): Promise<void> => {
  await apiClient.post("/auth/logout");
};

export const initializeMe = async (): Promise<IUser> => {
  const { data: user } = await apiClient.get("/auth/me");
  return user;
};
