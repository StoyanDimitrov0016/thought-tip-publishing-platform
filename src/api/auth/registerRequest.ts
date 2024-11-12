import apiClient from "../axiosInstance";

import { IRegisterCredentials } from "../../types/auth/ICredentials";
import { IAuthUser } from "../../types/auth/IAuthUser";
import { IRegistrationApiResponse } from "../../types/auth/IAuthApiResponses";

export const registerRequest = async (
  credentials: IRegisterCredentials
): Promise<IAuthUser | null> => {
  try {
    const registerResponse = await apiClient.post<IRegistrationApiResponse>(
      "/auth/register",
      credentials
    );

    return registerResponse.data.data.user;
  } catch (error) {
    console.error("Registration attempt failed due to:", error);
    return null;
  }
};
