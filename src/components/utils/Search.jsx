import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input } from "@chakra-ui/react";

import MovieItem from "../movies/MovieItem";

const Search = ({ genres, passMovies, passGenres }) => {
  const [searchedMoviesResults, setSearchMoviesResults] = useState([]);
  const [userQuery, setUserQuery] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=0b7131c882252f4d2e4fbdb70636cf42&language=en-US&query=${userQuery}`
      );

      const movies = await results.json();

      setSearchMoviesResults(movies.results);
    };

    if (userQuery !== "") fetchMovies();
  }, [userQuery]);

  const onChangeHandler = (event) => {
    setUserQuery(event.target.value);
    navigate("/search/" + event.target.value);
  };

  useEffect(() => {
    passMovies(searchedMoviesResults);
    passGenres(genres);
  }, [searchedMoviesResults, genres, passMovies, passGenres]);

  return (
    <Box w="100vw" m="5em auto" color="white">
      <Box w="100vw" display="flex">
        <Input
          w="60vw"
          m="0 auto 3em auto"
          placeholder="Search..."
          onChange={onChangeHandler}
        />
      </Box>
      <Box display="flex" w="100vw">
        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" w="80vw" m="auto">
          {searchedMoviesResults.map((movie) => {
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
      </Box>
    </Box>
  );
};

export default Search;
