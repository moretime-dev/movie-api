import { Box, Flex } from "@chakra-ui/react";

import MovieItem from "./MovieItem";

const MovieList = ({ movies, genres }) => {
  return (
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
  );
};

export default MovieList;
