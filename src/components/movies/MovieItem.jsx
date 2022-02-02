import { Box, Flex } from "@chakra-ui/react";

const MovieItem = ({
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

  console.log(currentGenres);

  return (
    <Flex w="100%" cursor="pointer">
      <Box
        display="flex"
        w="100%"
        m="2em 1em"
        border="2px solid black"
        p="1em"
        borderRadius="1em"
        backgroundColor="grey"
        boxShadow="2px 2px 5px black"
      >
        <Box backgroundColor="transparent">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt={title}
            style={{
              width: "30em",
              borderRadius: "0.5em",
            }}
          />
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
          <Box fontStyle="italic" fontSize="0.8rem" pt="0.5em">
            {currentGenres.map((currentGenre) => {
              return (
                <span
                  key={currentGenre}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "0 0.3em",
                    borderRadius: "1em",
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
  );
};

export default MovieItem;
