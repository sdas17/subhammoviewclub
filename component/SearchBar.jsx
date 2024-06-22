const SearchBar = ({ movies, setMovies, allMoviesForFiltering }) => {
    console.log("searchbar re-renders");
    const handleFilteredMovies = (filteredMoviesName) => {
      const filteredMovies = allMoviesForFiltering.filter((movie) => {
        return movie.original_title
          .toLowerCase()
          .includes(filteredMoviesName.toLowerCase());
      });
      setMovies(filteredMovies);
    };
    return (
      <div className="flex items-center">
        <input
          onChange={(e) => handleFilteredMovies(e.target.value)}
          className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search videos/series...."
        />
      </div>
    );
  };
  
  export default SearchBar; //default export







  