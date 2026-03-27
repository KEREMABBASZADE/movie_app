import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Movie({ movieObj }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="w-full">
      <div
        className={`relative h-full rounded border overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
          isDark ? "border-gray-600 bg-gray-800" : "border-gray-200 bg-white"
        }`}
      >
        <Link to={`/movies/${movieObj.id}`}>
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt={movieObj.title}
            className="w-full object-cover"
            style={{ aspectRatio: "2/3" }}
          />
        </Link>
        <div className={`p-2 ${isDark ? "text-white" : "text-gray-900"}`}>
          <h2 className="text-sm font-semibold leading-tight line-clamp-2">
            {movieObj.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
