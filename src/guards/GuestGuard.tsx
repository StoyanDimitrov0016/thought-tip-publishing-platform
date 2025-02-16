import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";
import { REDIRECT_PATHS } from "../config/paths";

export default function GuestGuard() {
  const { user, isFetchingUser } = useAuthContext();

  if (isFetchingUser) {
    return null;
  }

  if (user) {
    return <Navigate to={REDIRECT_PATHS.GUEST_GUARD_REDIRECT} replace />;
  }

  return <Outlet />;
}
