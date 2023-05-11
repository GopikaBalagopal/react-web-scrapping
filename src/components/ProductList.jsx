import React, { useEffect, useState } from "react";
import Products from "./Products";
import { Box, Button, Pagination, Stack } from "@mui/material";

const ProductList = ({ products }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [postNumber] = useState(10);
  const [currentProducts, setCurrentProducts] = useState([]);

  const currentPageNumber = pageNumber * postNumber - postNumber;

  useEffect(() => {
    setCurrentProducts(products.splice(currentPageNumber, postNumber));
  }, [products, currentPageNumber, postNumber]);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      <Products products={currentProducts} />
      {/* Pagination */}
      {currentProducts.length && (
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          {/* <Pagination count={100} variant="outlined" shape="rounded" /> */}
          <div>Page {pageNumber} </div>
          <div>
            <Button disabled={pageNumber === 1} onClick={handlePrev}>
              prev
            </Button>
            <Button onClick={handleNext}>next</Button>
          </div>
        </Box>
      )}
    </div>
  );
};

export default ProductList;
