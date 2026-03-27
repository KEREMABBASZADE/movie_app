import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <button
      className="flex items-center justify-center w-8 h-8 cursor-pointer bg-transparent border-0 p-0"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <i
        className={`bi text-lg ${
          isDark
            ? "bi-moon-stars text-white"
            : "bi-moon-stars-fill text-dark-900"
        }`}
      ></i>
    </button>
  );
}
