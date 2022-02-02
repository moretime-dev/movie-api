import { useEffect, useState } from "react";

import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=0b7131c882252f4d2e4fbdb70636cf42&page=5"
      );

      const movies = await results.json();

      setMovies(movies);
    };

    fetchMovies();
  }, []);

  return <div className="App"></div>;
}
