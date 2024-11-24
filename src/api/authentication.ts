import apiClient from "./axiosInstance";
import { ICreatedApiResponse, IOkSingleApiResponse } from "../types/IApiResponses";
import { ILoginCredentials, IRegisterCredentials } from "../types/IFormInputDefinitions";
import { IUserEntry } from "../types/IEntries";

export const register = async (registerCredentials: IRegisterCredentials): Promise<IUserEntry> => {
  const response = await apiClient.post<ICreatedApiResponse<IUserEntry>>(
    "/auth/register",
    registerCredentials
  );
  return response.data.data;
};

export const login = async (loginCredentials: ILoginCredentials): Promise<IUserEntry> => {
  const response = await apiClient.post<IOkSingleApiResponse<IUserEntry>>(
    "/auth/login",
    loginCredentials
  );
  return response.data.data;
};

export const logout = async (): Promise<void> => {
  await apiClient.post("/auth/logout");
};
