import { Box, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Flex w="100%" mt="3em">
        <Box
          display="block"
          margin="auto"
          w="100%"
          textAlign="center"
          fontSize="2rem"
          fontWeight="bold"
          color="white"
        >
          <h1>Welcome To GroovyMovie</h1>
        </Box>
      </Flex>

      <Box w="50vw" m="2em auto" fontSize="1rem" color="white">
        Hello Movie Fans!
      </Box>
    </>
  );
};

export default Home;
