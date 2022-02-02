import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/UI/Header";
import Home from "./pages/Home";
import MovieList from "./components/movies/MovieList";
import Search from "./components/utils/Search";

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

      setMovies(movies.results);
    };

    fetchMovies();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" exact element={<MovieList movies={movies} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
