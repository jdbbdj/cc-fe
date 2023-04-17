import React from "react";
import { ProductSections } from "./styled";
import { productItem } from "@/utils/data";
import ProductItem from "./Product";

function Products() {
  return (
    <ProductSections>
      {productItem.map((product) => {
        return <ProductItem key={`Product ${product.id}`} product={product} />;
      })}
    </ProductSections>
  );
}

export default Products;
