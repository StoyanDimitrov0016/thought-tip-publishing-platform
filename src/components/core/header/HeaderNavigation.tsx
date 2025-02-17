import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth-context";
import { PATHS } from "../../../config/paths";
import { RxAvatar } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";

export default function HeaderNavigation() {
  const { user, isFetchingUser } = useAuthContext();

  if (isFetchingUser) return null;

  return (
    <nav className="header-nav">
      <ul className="header-nav-list">
        {user ? (
          <>
            <li className="header-nav-item">
              <Link to={PATHS.CREATE_ARTICLE} className="header-nav-link">
                <FaPencilAlt />
                <span>Write</span>
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to={PATHS.MY_PROFILE} className="header-nav-link header-profile">
                <div className="header-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt="User Avatar" className="avatar" />
                  ) : (
                    <RxAvatar className="avatar-icon" />
                  )}
                </div>
                <span>My Profile</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="header-nav-item">
              <Link to={PATHS.LOGIN} className="header-nav-link">
                Login
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to={PATHS.REGISTER} className="header-nav-link">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
