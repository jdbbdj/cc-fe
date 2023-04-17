import React from "react";
import Products from "./Products";
import Video from "./Video";
import ProductNavigator from "./ProductNavigator";
import { ProductContainer } from "./styled";
const ProductLanding = () => {
  return (
    <ProductContainer>
      <ProductNavigator />
      <Products />
      <Video />
    </ProductContainer>
  );
};

export default ProductLanding;
