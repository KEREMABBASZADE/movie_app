import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Pagination({
  page,
  totalPages,
  setSearchParams,
  query,
}) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const btnClass = `px-4 py-2 text-sm rounded border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
    isDark
      ? "border-gray-500 text-white hover:bg-gray-700 disabled:hover:bg-transparent"
      : "border-gray-400 text-gray-800 hover:bg-gray-100 disabled:hover:bg-transparent"
  }`;

  return (
    <div className="container mx-auto px-4 py-3">
      <div
        className={`border rounded p-3 flex justify-between items-center ${isDark ? "border-gray-700" : "border-gray-300"}`}
      >
        <button
          className={btnClass}
          onClick={() => setSearchParams({ q: query, page: Number(page) - 1 })}
          disabled={page <= 1}
        >
          Back
        </button>
        <span className="text-sm">
          Page {page} / {totalPages}
        </span>
        <button
          className={btnClass}
          onClick={() => setSearchParams({ q: query, page: Number(page) + 1 })}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
