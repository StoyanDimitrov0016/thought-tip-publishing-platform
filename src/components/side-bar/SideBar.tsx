import { Link } from "react-router-dom";
import "./side-bar.styles.css";
import houseIcon from "/src/assets/house-01-svgrepo-com.svg";
import { ROUTES } from "../../utils/routes";

const SideBar = () => {
  return (
    <aside className="sidebar" aria-label="Sidebar Navigation">
      <h2 className="sidebar-title">Topics</h2>

      <Link to={ROUTES.HOME} className="sidebar-home-link" aria-label="Home">
        <img src={houseIcon} alt="Site Logo" className="sidebar-home-logo logo" />
        <span className="sidebar-home-text">Home</span>
      </Link>

      <section className="sidebar-section">
        <details className="sidebar-details" open>
          <summary className="sidebar-summary">Discover Topics</summary>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <a href="#" className="sidebar-link">
                Fitness
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" className="sidebar-link">
                Finance
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" className="sidebar-link">
                Health
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" className="sidebar-link">
                Traveling
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="#" className="sidebar-link">
                Programming
              </a>
            </li>
          </ul>
        </details>
      </section>

      <section className="sidebar-section">
        <details className="sidebar-details">
          <summary className="sidebar-summary">My Account</summary>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Link to={ROUTES.USER_PROFILE} className="sidebar-link">
                Patrick Collins
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to={ROUTES.CREATE_ARTICLE} className="sidebar-link">
                Create an article
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to={ROUTES.USER_PROFILE_PREFERENCES} className="sidebar-link">
                My preferences
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to={ROUTES.USER_PROFILE_USER_ARTICLES} className="sidebar-link">
                My articles
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to={ROUTES.USER_PROFILE_SAVED_ARTICLES} className="sidebar-link">
                My library
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to={ROUTES.USER_PROFILE_SAVED_ARTICLES} className="sidebar-link">
                Log out
              </Link>
            </li>
          </ul>
        </details>
      </section>
    </aside>
  );
};

export default SideBar;
