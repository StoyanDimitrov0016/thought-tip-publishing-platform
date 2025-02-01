import { Link } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import SearchBar from "./SearchBar";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

interface HeaderProps {
  isOpen: boolean;
  toggleHandler: () => void;
  isMobile: boolean;
}

const homePath = "/";
const appName = "Thought Tip";

export default function Header({ isOpen, toggleHandler, isMobile }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-group header-burger-menu-container">
          {isMobile && !isOpen && (
            <button
              className="burger-menu"
              onClick={toggleHandler}
              aria-label="Toggle Sidebar"
              aria-expanded={isOpen}
            >
              <IoMdMenu />
            </button>
          )}

          {isMobile && isOpen && (
            <button
              className="burger-menu"
              onClick={toggleHandler}
              aria-label="Toggle Sidebar"
              aria-expanded={isOpen}
            >
              <RxCross1 />
            </button>
          )}
        </div>
        <div className="header-group header-logo-container">
          <Link to={homePath}>
            <span>{appName}</span>
          </Link>
        </div>

        {!isMobile && (
          <div className="header-group header-search-container">
            <SearchBar />
          </div>
        )}

        <div className="header-group header-navigation-container">
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
}
