import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import { REDIRECT_PATHS } from "../config/paths";

export default function GuestGuard() {
  const { isAuth, isLoading } = useAuthContext();

  if (isLoading) return null;
  if (isAuth) return <Navigate to={REDIRECT_PATHS.GUEST_GUARD_REDIRECT} replace />;

  return <Outlet />;
}
