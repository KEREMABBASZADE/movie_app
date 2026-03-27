export default function WatchListMovie({ movieObj, removeFromWatchList }) {
  return (
    <div className="w-full">
      <div className="relative rounded border border-gray-200 overflow-hidden shadow-sm">
        <img
          src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
          alt={movieObj.title || ""}
          className="w-full object-cover"
          style={{ aspectRatio: "2/3" }}
        />
        <button
          className="absolute top-0 left-0 text-red-500 hover:text-red-700 text-xl p-1 bg-transparent leading-none"
          onClick={() => removeFromWatchList(movieObj)}
          aria-label="Remove from watchlist"
        >
          <i className="bi bi-dash-circle-fill"></i>
        </button>
      </div>
    </div>
  );
}
