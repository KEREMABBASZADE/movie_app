import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Input({ id, labelText, error, ...props }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className={`block text-sm font-medium mb-1 ${
          isDark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {labelText}
      </label>
      <input
        id={id}
        className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
          error
            ? "border-red-500"
            : isDark
              ? "border-gray-600"
              : "border-gray-300"
        } ${
          isDark
            ? "bg-gray-700 text-white placeholder-gray-400"
            : "bg-white text-gray-900 placeholder-gray-400"
        }`}
        {...props}
      />
      {error && <div className="text-red-400 text-sm mt-1">{error}</div>}
    </div>
  );
}
