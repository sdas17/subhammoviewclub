import { useState, useEffect } from "react";

const Counter = () => {
  //let counter = 0;
  const [counter, setCounter] = useState(0);

  const handleIncBtn = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  useEffect(() => {
    //effect fn

    const data = fetchMoviesData();
    console.log(data);
  }, []);

  const fetchMoviesData = async () => {
    //const response = await fetch("kfdjfksdjfkljsdflj");
    //const json = await response.json();
    return [{ name: "dune" }, { name: "dune -2" }, { name: "abc" }];
  };

  console.log("counter re-renders");
  return (
    <div>
      <div> {counter}</div>
      <button onClick={handleIncBtn} className="p-1 bg-slate-300 rounded-xl">
        Increase
      </button>
    </div>
  );
};

export default Counter;