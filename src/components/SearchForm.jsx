import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setSearchQuery("");
    }
  }

  return (
    <form className="flex w-full gap-1" onSubmit={handleSubmit}>
      <input
        type="search"
        className="flex-1 min-w-0 px-3 py-1.5 text-sm border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1.5 text-sm border border-l-0 rounded-r transition-colors bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
      >
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
