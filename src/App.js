import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/UI/Header";
import Home from "./pages/Home";
import MovieList from "./components/movies/MovieList";
import MovieItemDetails from "./components/movies/MovieItemDetails";
import Search from "./components/utils/Search";
import Pagination from "./components/UI/Pagination";

import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=0b7131c882252f4d2e4fbdb70636cf42&page=${currentPage}`
      );

      const movies = await results.json();

      setMovies(movies.results);
    };

    fetchMovies();
  }, [currentPage]);

  useEffect(() => {
    const fetchGenres = async () => {
      const results = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=0b7131c882252f4d2e4fbdb70636cf42&page=5"
      );

      const genres = await results.json();

      setGenres(genres.genres);
    };

    fetchGenres();
  }, []);

  const onPageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/movies"
            exact
            element={<MovieList movies={movies} genres={genres} />}
          />
          <Route
            path="/movies/:id"
            element={<MovieItemDetails movies={movies} genres={genres} />}
          />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Pagination
          onPageChange={onPageChangeHandler}
          currentPage={currentPage}
        />
      </div>
    </BrowserRouter>
  );
}
