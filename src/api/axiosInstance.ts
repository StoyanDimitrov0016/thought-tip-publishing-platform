import axios from "axios";
import tokenManager from "./tokenManager";

const BASE_URL = "http://localhost:5000/api/v1";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// TODO: Fix the hook invoking because it is not in a function
// apiClient.interceptors.request.use(async (config) => {
//   const token = await tokenManager();

//   if (token) {
//     config.headers.Authorization = token;
//   }

//   return config;
// });

export default apiClient;
