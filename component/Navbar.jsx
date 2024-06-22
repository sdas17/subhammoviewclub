import SearchBar from "./SearchBar";

const Navbar = ({ movies, setMovies, allMoviesForFiltering }) => {
  console.log("navbar re-renders");
  return (
    <div className="flex p-4 border rounded-2xl mt-2 bg-gray-50 hover:bg-gray-100  justify-between items-center ">
      <h2 className="text-xl text-gray-700 font-semibold">Subham Movie</h2>
      <SearchBar
        movies={movies}
        setMovies={setMovies}
        allMoviesForFiltering={allMoviesForFiltering}
      />
      <img
        className="h-12 rounded-full"
        src="https://images.miraclesoft.com/employee-profile-pics/sdas1.png?date=Sat%20Jun%2022%202024%2014:51:47%20GMT+0530%20(India%20Standard%20Time)"
      ></img>
      
    </div>
  );
};

export default Navbar; //default export