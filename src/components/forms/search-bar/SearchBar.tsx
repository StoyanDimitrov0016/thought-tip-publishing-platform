import "./search-bar.styles.css";
import magGlass from "/src/assets/magnifying-glass-svgrepo-com.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form role="search" className="search-form">
        <label htmlFor="search-input" className="visually-hidden">
          Search
        </label>
        <input id="search-input" type="text" placeholder="Search..." className="search-input" />
        <button type="submit" className="search-button">
          <div className="magnifying-glass-container">
            <img src={magGlass} alt="search" />
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
