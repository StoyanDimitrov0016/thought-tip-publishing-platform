import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import { ROUTES } from "../router/routes";

export default function GuestGuard() {
  const { isAuth, isLoading } = useAuthContext();

  if (isLoading) return null;
  if (isAuth) return <Navigate to={ROUTES.HOME} replace />;

  return <Outlet />;
}
