import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div key={movie.id} className="bg-white rounded-lg shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{movie.original_title}</h2>
          <p className="text-gray-600">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;