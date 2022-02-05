import { Link } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";

import imagePlaceholder from "../../assets/img/ef3-placeholder-image.jpg";

const MovieItem = ({
  movieId,
  poster,
  title,
  voteAverage,
  voteCount,
  genreIds,
  genres,
}) => {
  let currentGenres = [];

  for (let key in genres) {
    genreIds.forEach((genreId) => {
      if (genreId === genres[key].id) {
        currentGenres.push(genres[key].name);
      }
    });
  }

  return (
    <Link to={`/movies/movie/${movieId}`}>
      <Flex w="100%" cursor="pointer">
        <Box
          display="flex"
          w="100%"
          h="15em"
          m="2em 1em"
          border="2px solid black"
          p="1em"
          borderRadius="1em"
          backgroundColor="grey"
          boxShadow="2px 2px 5px black"
        >
          <Box backgroundColor="transparent">
            {poster ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${poster}`}
                alt={title}
                style={{
                  width: "30em",
                  borderRadius: "0.5em",
                }}
              />
            ) : (
              <img
                src={imagePlaceholder}
                alt={title}
                style={{
                  width: "30em",
                  borderRadius: "0.5em",
                }}
              />
            )}
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            w="300%"
            color="white"
            ml="1em"
            p="0.5em"
            borderRadius="0.5em"
          >
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                lineHeight: "1.1",
                marginBottom: ".4em",
              }}
            >
              {title}
            </h2>
            <span>Rating: {voteAverage} / 10</span>
            <span>{voteCount} Votes</span>
            <Box fontStyle="italic" fontSize="0.8rem" mt="1em">
              {currentGenres.map((currentGenre) => {
                return (
                  <span
                    key={currentGenre}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      padding: "0.1em 0.3em",
                      marginRight: "0.5em",
                      borderRadius: "0.5em",
                    }}
                  >
                    {currentGenre}{" "}
                  </span>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};

export default MovieItem;
