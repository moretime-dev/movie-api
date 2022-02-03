import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Box, Flex, Text } from "@chakra-ui/react";

const MovieItemDetails = ({ movies, genres }) => {
  const { id } = useParams();

  const movie = movies.filter((movie) => movie.id === +id);

  console.log(movie);

  let currentGenres = [];

  for (let key in genres) {
    movie[0].genre_ids.forEach((genreId) => {
      if (genreId === genres[key].id) {
        currentGenres.push(genres[key].name);
      }
    });
  }

  return (
    <Flex w="100vw">
      {movie.map((movieItem) => {
        return (
          <Box m="4em auto">
            <Box mb="1em" fontSize="2rem" fontWeight="bold" color="white">
              <Link to="/movies">BACK</Link>
            </Box>
            <Box key={movieItem.id} w="80vw" display="flex">
              <Box w="100%">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`}
                  alt={movie.title}
                  style={{
                    borderRadius: "1em",
                    boxShadow: "2px 2px 5px grey",
                  }}
                />
              </Box>
              <Box ml="3em">
                <Text fontSize="3rem" fontWeight="bold" color="white">
                  {movieItem.title}
                </Text>
                <Text color="white" mt="2em" fontSize="1.4rem">
                  {movieItem.overview}
                </Text>
                <Box mt="3em">
                  {currentGenres.map((genre) => {
                    return (
                      <span
                        key={genre}
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          padding: "0.1em 0.3em",
                          marginRight: "0.5em",
                          borderRadius: "0.5em",
                        }}
                      >
                        {genre}{" "}
                      </span>
                    );
                  })}
                </Box>
                <Box mt="3em" fontSize="1.5rem" fontWeight="bold" color="white">
                  <span>Rating: {movieItem.vote_average} / 10</span>
                  <br />
                  <span>{movieItem.vote_count} Votes</span>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
};

export default MovieItemDetails;
