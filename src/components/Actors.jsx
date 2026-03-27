import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Actors({ actors }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="container max-w-6xl mx-auto px-4 py-3">
      <h1
        className={`mb-3 text-2xl font-normal ${isDark ? "text-white" : "text-gray-900"}`}
      >
        Actors
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {actors.slice(0, 12).map((actor) => (
          <div
            key={actor.id}
            className={`rounded border overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <img
              src={"https://image.tmdb.org/t/p/original/" + actor.profile_path}
              alt={actor.name}
              className="w-full object-cover"
              style={{ aspectRatio: "2/3" }}
            />
            <div className="p-2">
              <p
                className={`text-sm font-medium leading-tight line-clamp-2 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {actor.name}
              </p>
              {actor.character && (
                <p
                  className={`text-xs mt-0.5 line-clamp-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                >
                  {actor.character}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
