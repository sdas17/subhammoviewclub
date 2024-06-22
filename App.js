import Navbar from "./component/Navbar";
import Counter from "./component/Counter";
import MoviesContainer from "./component/MoviesContainer";
import useFetchMovies from "./hooks/useFetchMovies";

const App = () => {
  console.log("App re-render");
  const { movies, setMovies, allMoviesForFiltering } = useFetchMovies();
  return (
    <div className="container max-w-screen-lg mx-auto">
   

      <Navbar
        movies={movies}
        setMovies={setMovies}
        allMoviesForFiltering={allMoviesForFiltering}
      />
      <MoviesContainer movies={movies} />
    </div>
  );
};

export default App;

//hooks are just js fn -  useState , useEffect ,useMemo, useId, ...
// state variable are special variables that trigger a re-render when their value changes

// whenever the parent component re-renders , all childs re-renders

// App -> Parent component of Navbar
// Navbar -> child component of app