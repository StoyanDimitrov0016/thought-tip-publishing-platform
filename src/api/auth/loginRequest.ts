import apiClient from "../axiosInstance";

import { ILoginCredentials } from "../../types/auth/ICredentials";
import { IAuthUser } from "../../types/auth/IAuthUser";
import { ILoginApiResponse } from "../../types/auth/IAuthApiResponses";

export const loginRequest = async (credentials: ILoginCredentials): Promise<IAuthUser | null> => {
  try {
    const loginResponse = await apiClient.post<ILoginApiResponse>("/auth/login", credentials);

    return loginResponse.data.data.user;
  } catch (error) {
    console.error("Login attempt failed due to:", error);
    return null;
  }
};
