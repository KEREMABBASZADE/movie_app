import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import SimilarMovies from "./SimilarMovies";
import Actors from "../components/Actors";
import { UserContext } from "../contexts/UserContext";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "9394fb08eb73fd225d415dd17bb8eb01";
const language = "en-US";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToWatchList, removeFromWatchList, watchList } =
    useContext(UserContext);
  const isAdded = watchList?.find((i) => i.id == movie?.id);

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${id}?api_key=${api_key}&language=${language}&append_to_response=credits`,
        );
        if (!response.ok) throw new Error("Hata oluştu");
        const data = await response.json();
        setMovie(data);
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
      window.scrollTo(0, 0);
    }
    getMovie();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div
        className="text-white relative min-h-screen"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 flex items-center justify-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10">
              <div className="hidden lg:block md:col-span-3">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded shadow border border-gray-500"
                />
              </div>
              <div className="md:col-span-9">
                <h1 className="text-4xl font-bold mb-3">{movie.title}</h1>
                <p className="text-sm mb-3 text-gray-300">
                  {movie.release_date}
                  <i className="bi bi-dot mx-1"></i>
                  {movie.genres.map((g) => g.name).join(", ")}
                  <i className="bi bi-dot mx-1"></i>
                  {movie.runtime} min
                </p>
                <p className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded">
                    {Math.round(movie.vote_average * 10)}%
                  </span>
                  <span
                    className="bg-red-500 text-white text-sm px-2 py-1 rounded cursor-pointer"
                    onClick={() =>
                      isAdded
                        ? removeFromWatchList(movie)
                        : addToWatchList(movie)
                    }
                  >
                    <i
                      className={`bi ${isAdded ? "bi-heart-fill" : "bi-heart"}`}
                    ></i>
                  </span>
                </p>
                {movie.overview && (
                  <p className="text-base mb-4">
                    <strong>Overview</strong> {movie.overview}
                  </p>
                )}
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <p className="flex flex-col text-center">
                    <span className="text-gray-400 text-sm">Producer</span>
                    <span>{movie.production_companies[0]?.name}</span>
                  </p>
                  <p className="flex flex-col text-center">
                    <span className="text-gray-400 text-sm">Director</span>
                    <span>{movie.credits.crew[0]?.name}</span>
                  </p>
                  <p className="flex flex-col text-center">
                    <span className="text-gray-400 text-sm">Screenwriter</span>
                    <span>{movie.credits.crew[1]?.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Actors actors={movie.credits.cast} />
      <SimilarMovies movieId={id} />
    </>
  );
};

export default MovieDetails;
