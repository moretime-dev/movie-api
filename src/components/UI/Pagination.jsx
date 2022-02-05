import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Flex, Box } from "@chakra-ui/react";

import Button from "../UI/Button";

const Pagination = ({ currentPage, onPageChange }) => {
  const params = useParams();
  const pageFromParams = params.page;
  const [page, setPage] = useState(currentPage);

  let navigate = useNavigate;

  const onPreviousPageHandler = () => {
    if (page === 1) {
      navigate("/movies/1");
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const onNextPageHandler = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    // console.log(page);
    // if (page === 1) return;
    onPageChange(page);
  }, [page, onPageChange]);

  return (
    <Box w="100vw">
      <Flex w="20vw" m="auto" justifyContent="center">
        <Link to={`/movies/${page - 1}`}>
          <Button buttonText="<<PREV" onClick={onPreviousPageHandler} />
        </Link>
        <Link to={`/movies/${page + 1}`}>
          <Button buttonText="NEXT>>" onClick={onNextPageHandler} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Pagination;
