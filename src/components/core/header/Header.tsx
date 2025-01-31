import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/routes";
import { useAuthContext } from "../../../contexts/authContext";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./header.css";

const Header = () => {
  const { isAuth, isLoading } = useAuthContext();

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to={ROUTES.HOME}>
            <h3>Thought Tip</h3>
          </Link>
        </div>

        {/* Search Bar */}
        <form role="search" className="header-search">
          <label htmlFor="search-input" className="visually-hidden">
            Search
          </label>
          <input id="search-input" type="text" placeholder="Search..." />
          <button type="submit" aria-label="Search">
            <FaMagnifyingGlass />
          </button>
        </form>

        {/* Navigation */}
        <NavBar isAuth={isAuth} isLoading={isLoading} />
      </div>
    </header>
  );
};

export default Header;

const NavBar = ({ isAuth, isLoading }: { isAuth: boolean; isLoading: boolean }) => {
  return (
    <nav aria-label="Main Navigation" className="header-nav">
      <ul>{isLoading ? null : isAuth ? <AuthNav /> : <GuestNav />}</ul>
    </nav>
  );
};

const AuthNav = () => (
  <>
    <li>
      <Link to={ROUTES.CREATE_ARTICLE}>
        <FaPen />
        <span>Create</span>
      </Link>
    </li>
    <li>
      <Link to={ROUTES.USER_NOTIFICATIONS} aria-label="Notifications">
        <IoIosNotifications />
      </Link>
    </li>
    <li>
      <Link to={ROUTES.USER_PROFILE} aria-label="Profile">
        <MdOutlineAccountCircle />
      </Link>
    </li>
  </>
);

const GuestNav = () => (
  <>
    <li>
      <Link to={ROUTES.LOGIN}>Login</Link>
    </li>
    <li>
      <Link to={ROUTES.REGISTER}>Register</Link>
    </li>
  </>
);
