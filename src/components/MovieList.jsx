import Movie from "./Movie";

export default function MovieList({ movies, title }) {
  return (
    <div className="container mx-auto px-12 py-3">
      <h1 className="mb-3 text-2xl font-normal">{title}</h1>
      {movies.length === 0 ? (
        <div>Movie not found</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {movies.map((m, index) => (
            <Movie key={index} movieObj={m} />
          ))}
        </div>
      )}
    </div>
  );
}
