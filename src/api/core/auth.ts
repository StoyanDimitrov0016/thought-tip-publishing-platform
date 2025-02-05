import apiClient from "../axiosInstance";
import { API_ENDPOINTS } from "../../config/paths";
import { RegisterData, LoginData, User } from "../../types/collections/user";

export const register = async (registerData: RegisterData): Promise<User> => {
  const { data: user } = await apiClient.post(API_ENDPOINTS.REGISTER, registerData);
  return user;
};

export const login = async (loginData: LoginData): Promise<User> => {
  const { data: user } = await apiClient.post(API_ENDPOINTS.LOGIN, loginData);
  return user;
};

export const logout = async (): Promise<void> => {
  await apiClient.post(API_ENDPOINTS.LOGOUT);
};

export const initializeMe = async (): Promise<User> => {
  const { data: user } = await apiClient.get(API_ENDPOINTS.ME);
  return user;
};
