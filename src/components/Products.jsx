import styled from "@emotion/styled";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const ProductListContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "calc(100vh - 200px)", // Adjust the maximum height as needed
  overflow: "auto",
  gap: 20,
});

const ProductCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "500px",
  height: "200px",
  padding: "10px",
  marginBottom: "20px",
  color: "#fff", // Set the text color to white
});

const ProductCardWrapper = styled(Card)({
  width: "500px",
  display: "flex",
});

const ProductCardContent = styled(CardContent)({
  flex: "1",
});

const ProductImage = styled(CardMedia)({
  padding: "10px",
  width: "30%",
  height: "auto",
  borderRadius: "10px",
});

const ProductTitle = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "5px",
});

const ProductPrice = styled(Typography)({
  color: "green",
  marginBottom: "5px",
});

const ProductOfferPrice = styled(Typography)({
  color: "red",
  marginBottom: "5px",
});

const ProductRating = styled(Typography)({
  color: "#999",
});

const Products = (props) => {
  const { products } = props;

  return (
    <div>
      <h1>Product List</h1>
      <ProductListContainer>
        {products.map((product, index) => (
          <ProductCardWrapper>
            <ProductImage component="img" image={product.image} />
            <ProductCardContent>
              <ProductTitle variant="h6">{product.title}</ProductTitle>
              <ProductPrice variant="subtitle1">
                Price: {product.price}
              </ProductPrice>
              <ProductOfferPrice variant="subtitle1">
                Offer Price: {product.offer_price}
              </ProductOfferPrice>
              <ProductRating variant="subtitle1">
                Rating: {product.rating}
              </ProductRating>
            </ProductCardContent>
          </ProductCardWrapper>
        ))}
      </ProductListContainer>
    </div>
  );
};

export default Products;
