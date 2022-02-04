import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import MovieItem from "./MovieItem";
import Pagination from "../UI/Pagination";

const MovieList = (props) => {
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

  props.passMovies(movies);

  props.passGenres(genres);

  return (
    <Box>
      <Flex w="100vw" justify="center">
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          w="80vw"
          justifyContent="center"
        >
          {movies.map((movie) => {
            return (
              <MovieItem
                key={movie.id}
                movieId={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                voteAverage={movie.vote_average}
                voteCount={movie.vote_count}
                genreIds={movie.genre_ids}
                genres={genres}
              />
            );
          })}
        </Box>
      </Flex>
      <Pagination
        onPageChange={onPageChangeHandler}
        currentPage={currentPage}
      />
    </Box>
  );
};

export default MovieList;
