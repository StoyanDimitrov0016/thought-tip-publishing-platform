import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import { ROUTES } from "../router/routes";

export default function AuthGuard() {
  const { isAuth, isLoading } = useAuthContext();

  if (isLoading) return null;
  if (!isAuth) return <Navigate to={ROUTES.LOGIN} replace />;

  return <Outlet />;
}
