import { useContext, createContext, ReactNode } from "react";
import useAuth from "../hooks/useAuth";
import { IAuthUser } from "../types/auth/IAuthUser";
import { ILoginCredentials, IRegisterCredentials } from "../types/auth/ICredentials";

interface AuthContextType {
  user: IAuthUser | null;
  login: (credentials: ILoginCredentials) => Promise<void>;
  register: (credentials: IRegisterCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { user, register, login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return authContext;
};
