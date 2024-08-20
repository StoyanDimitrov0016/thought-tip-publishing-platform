import { useState } from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";
import createArticleIcon from "/src/assets/write-pencil-compose-document-sheet-svgrepo-com.svg";
import notificationsIcon from "/src/assets/bell-svgrepo-com.svg";
import profileIcon from "/src/assets/profile-1335-svgrepo-com.svg";
import { ROUTES } from "../../utils/routes";
import SearchBar from "../search-bar/SearchBar";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <Link to={ROUTES.HOME}>
            <img className="logo" src="thought-tip-logo.png" alt="Logo" />
          </Link>
        </div>

        <SearchBar />
        <button onClick={() => setIsLogged((prev) => !prev)}>XX</button>

        <nav aria-label="Primary Navigation" className="primary-navigation">
          <ul>
            {isLogged ? (
              <>
                <li>
                  <Link to={ROUTES.CREATE_ARTICLE}>
                    <img className="icon" src={createArticleIcon} alt="" /> <span>Create</span>
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
              </>
            ) : (
              <li>
                <Link to={ROUTES.LOGIN}>Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
