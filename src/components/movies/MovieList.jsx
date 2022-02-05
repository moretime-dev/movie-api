import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";

import MovieItem from "./MovieItem";
import Pagination from "../UI/Pagination";

const MovieList = ({ passMovies, passGenres, onPageChange }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const params = useParams();
  const pageFromParams = params.page;
  const [currentPage, setCurrentPage] = useState(+pageFromParams);

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=0b7131c882252f4d2e4fbdb70636cf42&page=${+pageFromParams}`
      );

      const movies = await results.json();

      setMovies(movies.results);
    };

    fetchMovies();
  }, [pageFromParams]);

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

  useEffect(() => {
    passMovies(movies);
    passGenres(genres);
  }, [movies, genres, passMovies, passGenres]);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const onPageChangeHandler = (page) => {
    setCurrentPage(page);
  };

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
