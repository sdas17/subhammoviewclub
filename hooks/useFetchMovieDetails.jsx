import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const useFetchMovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const data = await fetchMoviesData();
      setMovie(data);
    }
    getMovies();
  }, []);

  async function fetchMoviesData() {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDlmN2U2ZTJmNDJlODZkMjU4Y2MyZmRmMDZhNzQ2OSIsInN1YiI6IjY1MzRjMTRkOTFmMGVhMDEzODg4NjBjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZdu1hXdryATPGDCC1s8jFU-riobmH_soYDU4qf2-1E",
      },
    };

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  }

  return movie;
};

export default useFetchMovieDetails;