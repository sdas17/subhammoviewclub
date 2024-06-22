import { useState, useEffect } from "react";

const useFetchMovies = () => {
  const [movies, setMovies] = useState(null);
  const [allMoviesForFiltering, setAllMoviesForFiltering] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const data = await fetchMoviesData();
      setMovies(data.results);
      setAllMoviesForFiltering(data.results);
      console.log(data);
    }
    getMovies();
  }, []);

  async function fetchMoviesData() {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
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

  return { movies, setMovies, allMoviesForFiltering };
};

export default useFetchMovies;