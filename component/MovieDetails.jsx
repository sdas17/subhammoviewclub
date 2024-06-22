import { Link } from "react-router-dom";
import useFetchMovieDetails from "../hooks/useFetchMovieDetails";

const MovieDetails = () => {
  const movie = useFetchMovieDetails();

  if (movie == null) return;
  return (
    <div className="container max-w-screen-lg mx-auto">
      <Link to={"/"}>
        <button className="py-2 px-3 mt-3 rounded-full bg-gray-100">
          Back
        </button>
      </Link>
      <div className="flex flex-col-reverse md:flex-row gap-5 mt-8">
        <div>
          <div className="text-4xl font-bold mb-2 ">
            {movie?.original_title}
          </div>
          <div>{movie?.overview}</div>
          <div className="flex items-center mt-4">
            <div className="text-gray-700">Genres:</div>
            <ul className="ml-2">
              {movie?.genres?.map((genre) => (
                <li
                  key={genre?.id}
                  className="inline-block bg-gray-200 my-1 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {genre?.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Release Date:</span>{" "}
            {movie?.release_date}
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Runtime:</span> {movie?.runtime}{" "}
            minutes
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Average Rating:</span>{" "}
            {movie?.vote_average}
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Revenue:</span> $
            {movie?.revenue?.toLocaleString()}
          </div>
          <div className="mt-4">
            <span className="text-gray-700">Production Companies:</span>{" "}
            {movie?.production_companies
              ?.map((company) => company?.name)
              .join(", ")}
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className=" object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default MovieDetails;