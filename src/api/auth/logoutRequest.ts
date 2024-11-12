import apiClient from "../axiosInstance";

export const logoutRequest = async (): Promise<boolean> => {
  try {
    const logoutResponse = await apiClient.post("/auth/logout");
    return logoutResponse.status === 204;
  } catch (error) {
    console.error("Logout attempt failed due to:", error);
    return false;
  }
};
