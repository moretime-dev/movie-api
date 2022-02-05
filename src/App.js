import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/UI/Header";
import Home from "./pages/Home";
import MovieList from "./components/movies/MovieList";
import MovieItemDetails from "./components/movies/MovieItemDetails";
import Search from "./components/utils/Search";

import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const passMovies = (movies) => {
    setMovies(movies);
  };
  const passGenres = (genres) => {
    setGenres(genres);
  };

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
            path="/movies/:page"
            element={
              <MovieList
                passMovies={passMovies}
                passGenres={passGenres}
                onPageChange={onPageChangeHandler}
                currentPage={currentPage}
              />
            }
          />
          <Route
            path="/movies/:id"
            element={<MovieItemDetails movies={movies} genres={genres} />}
          />
          {/* <Route path="/movies/:page" element={<MovieList />} /> */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
