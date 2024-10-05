import axios from "axios";
import tokenManager from "./tokenManager";

const BASE_URL = "http://localhost:8888/api/v1";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const token = await tokenManager();

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default apiClient;
