import { Link } from "react-router-dom";
import "./header.styles.css";

import createArticleIcon from "/src/assets/write-pencil-compose-document-sheet-svgrepo-com.svg";
import notificationsIcon from "/src/assets/bell-svgrepo-com.svg";
import profileIcon from "/src/assets/profile-1335-svgrepo-com.svg";
import { ROUTES } from "../../router/routes";
import SearchBar from "../search-bar/SearchBar";

const Header = () => {
  //TODO: Add skeleton instead of just a message

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <Link to={ROUTES.HOME}>
            <img className="logo" src="thought-tip-logo.png" alt="Logo" />
          </Link>
        </div>

        <SearchBar />

        <SignedInNav />
        <SignedOutNav />
      </div>
    </header>
  );
};

export default Header;

const SignedInNav = () => {
  return (
    <nav aria-label="Primary Navigation" className="primary-navigation">
      <ul>
        <li>
          <Link to={ROUTES.CREATE_ARTICLE}>
            <img className="icon" src={createArticleIcon} alt="Create" /> <span>Create</span>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.USER_NOTIFICATIONS}>
            <img className="icon" src={notificationsIcon} alt="Notifications" />
          </Link>
        </li>
        <li>
          <Link to={ROUTES.USER_PROFILE}>
            <img className="icon" src={profileIcon} alt="Profile" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const SignedOutNav = () => {
  return (
    <nav aria-label="Primary Navigation" className="primary-navigation">
      <ul>
        <li>
          <Link to={ROUTES.LOGIN}>
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.REGISTER}>
            <span>Register</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
