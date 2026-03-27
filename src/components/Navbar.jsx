import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSelector from "./ThemeSelector";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { watchList } = useContext(UserContext);
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 text-md rounded transition-colors ${
      isActive
        ? isDark
          ? "text-white"
          : "text-gray-900 font-semibold"
        : isDark
          ? "text-gray-400 hover:text-white"
          : "text-gray-500 hover:text-gray-900"
    }`;

  return (
    <nav
      className={`border-b sticky top-0 z-50 transition-colors ${
        isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14 gap-2">
          <ThemeSelector />

          <Logo />

          <ul className="hidden lg:flex items-center ml-2">
            <li>
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>

          <div className="hidden lg:flex flex-1 px-4"></div>

          <ul className="hidden lg:flex items-center gap-1">
            <li>
              <SearchForm />
            </li>
            <li>
              <NavLink className={navLinkClass} to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to="/register">
                Register
              </NavLink>
            </li>
          </ul>

          <div className="hidden lg:block ml-1 relative">
            <Link
              to="/watchlist"
              className={`inline-flex items-center justify-center px-3 py-1.5 text-sm border rounded transition-colors ${
                isDark
                  ? "border-gray-500 text-white hover:bg-gray-700"
                  : "border-gray-400 text-gray-800 hover:bg-gray-100"
              }`}
            >
              <i className="bi bi-heart-fill"></i>
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {watchList.length}
              </span>
            </Link>
          </div>

          <button
            className={`lg:hidden ml-auto p-1 transition-colors ${
              isDark ? "text-white" : "text-gray-800"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-xl`}></i>
          </button>
        </div>

        {isOpen && (
          <div
            className={`lg:hidden py-3 border-t transition-colors ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <ul className="flex flex-col mb-3">
              {[
                { to: "/", label: "Home" },
                { to: "/movies", label: "Movies" },
                { to: "/login", label: "Login" },
                { to: "/register", label: "Register" },
                { to: "/watchlist", label: `Watchlist (${watchList.length})` },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    className={navLinkClass}
                    to={to}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <SearchForm />
          </div>
        )}
      </div>
    </nav>
  );
}
