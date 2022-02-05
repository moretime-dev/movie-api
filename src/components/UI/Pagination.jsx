import { useState } from "react";
import { Link } from "react-router-dom";

import { Flex, Box } from "@chakra-ui/react";

import Button from "../UI/Button";

const Pagination = ({ currentPage, onPageChange }) => {
  const [page, setPage] = useState(currentPage);

  const onPreviousPageHandler = () => {
    if (page < 1) return;
    setPage((prev) => prev - 1);

    onPageChange(page);
  };

  const onNextPageHandler = () => {
    setPage((prev) => prev + 1);
    onPageChange(page);
  };

  return (
    <Box w="100vw">
      <Flex w="20vw" m="auto" justifyContent="center">
        <Link to={`/movies/${page}`}>
          <Button buttonText="<<PREV" onClick={onPreviousPageHandler} />
        </Link>
        <Link to={`/movies/${page}`}>
          <Button buttonText="NEXT>>" onClick={onNextPageHandler} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Pagination;
