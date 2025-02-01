import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";

interface SearchBarValues {
  query: string;
}

// TODO: Extract these helpers into a separate file:
const normalizeSearch = (searchQuery: string) => {
  const sliced = searchQuery.substring(0, 100);
  const trimmed = sliced.trim();
  const lowercased = trimmed.toLowerCase();
  const dashed = lowercased.replace(/\s+/g, "-");
  const validQuery = dashed.replace(/[^a-z0-9-]/g, "");
  return validQuery || null;
};

const getRedirectPath = (query: string) => {
  return `/?search=${query}`;
};

export default function SearchBar() {
  const navigate = useNavigate();

  const { values, changeHandler, submitHandler } = useForm<SearchBarValues>({
    initialValues: { query: "" },
    onSubmit: async (values: SearchBarValues) => {
      const query = normalizeSearch(values.query);
      if (!query) return;
      const redirectPath = getRedirectPath(query);
      navigate(redirectPath);
    },
  });

  return (
    <form className="search-bar" onSubmit={submitHandler}>
      <div className="search-bar-group">
        <label htmlFor="search" className="visually-hidden">
          Search
        </label>
        <input
          type="text"
          id="search"
          name="query"
          value={values.query}
          onChange={changeHandler}
          placeholder="Search..."
          required
          className="search-bar-input"
        />
      </div>
      <button type="submit" className="search-bar-button">
        <HiMiniMagnifyingGlass aria-hidden="true" />
      </button>
    </form>
  );
}
