import { createContext, useContext, useMemo, ReactNode } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { register, login, logout, initializeMe } from "../api/core/auth-api";
import { QUERY_KEYS } from "../config/query-keys";
import { RegisterData, LoginData } from "../types/entities/form";
import { User } from "../types/entities/user";

interface AuthContextType {
  user: User | null;
  isFetchingUser: boolean;
  loginHandler: (data: LoginData) => Promise<void>;
  registerHandler: (data: RegisterData) => Promise<void>;
  logoutHandler: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();

  const { data: user, isLoading: isFetchingUser } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: initializeMe,
    staleTime: Infinity,
    retry: false,
  });

  function successHandler(user: User | null) {
    queryClient.cancelQueries();
    queryClient.invalidateQueries();
    queryClient.setQueryData([QUERY_KEYS.USER], user);
  }

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: successHandler,
  });

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: successHandler,
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => successHandler(null),
  });

  async function loginHandler(data: LoginData) {
    await loginMutation.mutateAsync(data);
  }

  async function registerHandler(data: RegisterData) {
    await registerMutation.mutateAsync(data);
  }

  async function logoutHandler() {
    await logoutMutation.mutateAsync();
  }

  const contextValue: AuthContextType = useMemo(
    () => ({
      user: user ?? null,
      isFetchingUser,
      loginHandler,
      registerHandler,
      logoutHandler,
    }),
    [user, isFetchingUser]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
}
