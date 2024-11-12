import { useState } from "react";

import { loginRequest } from "../api/auth/loginRequest";
import { registerRequest } from "../api/auth/registerRequest";
import { logoutRequest } from "../api/auth/logoutRequest";

import { IAuthUser } from "../types/auth/IAuthUser";
import { ILoginCredentials, IRegisterCredentials } from "../types/auth/ICredentials";

interface AuthContextType {
  user: IAuthUser | null;
  login: (credentials: ILoginCredentials) => Promise<void>;
  register: (credentials: IRegisterCredentials) => Promise<void>;
  logout: () => void;
}

function useAuth(): AuthContextType {
  const [user, setUser] = useState<IAuthUser | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (credentials: ILoginCredentials) => {
    try {
      const loggedUser = await loginRequest(credentials);

      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const register = async (credentials: IRegisterCredentials) => {
    try {
      const registeredUser = await registerRequest(credentials);

      setUser(registeredUser);
      localStorage.setItem("user", JSON.stringify(registeredUser));
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const logout = async () => {
    try {
      const isLoggedOut = await logoutRequest();
      if (!isLoggedOut) {
        throw new Error();
      }
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { user, login, register, logout };
}

export default useAuth;
