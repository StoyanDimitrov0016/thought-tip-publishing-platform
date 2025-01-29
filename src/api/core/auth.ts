import apiClient from "../axiosInstance";
import { RegisterData, LoginData, User } from "../../types/collections/user";

// TODO: extract to a centralized place
const urls = {
  register: "/auth/register",
  login: "/auth/login",
  logout: "/auth/logout",
  me: "/auth/me",
};

export const register = async (registerData: RegisterData): Promise<User> => {
  const { data: user } = await apiClient.post(urls.register, registerData);
  return user;
};

export const login = async (loginData: LoginData): Promise<User> => {
  const { data: user } = await apiClient.post(urls.login, loginData);
  return user;
};

export const logout = async (): Promise<void> => {
  await apiClient.post(urls.logout);
};

export const initializeMe = async (): Promise<User> => {
  const { data: user } = await apiClient.get(urls.me);
  return user;
};
