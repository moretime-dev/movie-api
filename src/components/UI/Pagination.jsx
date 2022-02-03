import { Flex, Box } from "@chakra-ui/react";

import Button from "../UI/Button";

const Pagination = ({ currentPage, onPageChange }) => {
  const onPreviousPageHandler = () => {
    currentPage = currentPage - 1;

    if (currentPage < 1) return;

    onPageChange(currentPage);
    console.log(currentPage);
  };

  const onNextPageHandler = () => {
    currentPage = currentPage + 1;
    onPageChange(currentPage);
  };

  return (
    <Box w="100vw">
      <Flex w="20vw" m="auto" justifyContent="center">
        <Button buttonText="<<PREV" onClick={onPreviousPageHandler} />
        <Button buttonText="NEXT>>" onClick={onNextPageHandler} />
      </Flex>
    </Box>
  );
};

export default Pagination;
