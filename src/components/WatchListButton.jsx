export default function WatchListButton({ movies, onSetIsWatchListOpen }) {
  return (
    <div className="mb-2 lg:mb-0 ml-1">
      <button
        onClick={() => onSetIsWatchListOpen((prevState) => !prevState)}
        type="button"
        className="relative border border-white text-white px-3 py-1.5 rounded text-sm hover:bg-white hover:text-gray-900 transition-colors"
      >
        <i className="bi bi-heart"></i>
        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center leading-none">
          {movies.length}
        </span>
      </button>
    </div>
  );
}
