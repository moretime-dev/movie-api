import { NavLink } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="space-evenly"
      mt="1em"
      fontSize="2rem"
      fontWeight="bold"
      color="white"
    >
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/movies">MOVIES</NavLink>
      <NavLink to="/search">SEARCH</NavLink>
    </Box>
  );
};

export default Header;
