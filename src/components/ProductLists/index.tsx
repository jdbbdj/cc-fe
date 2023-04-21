import React, { useEffect, useState } from "react";
import ReuasbleProducts from "../Home/Products/Products";
import { FilterContainer, ProductListContainer, Filter } from "./styled";
import Typography from "../Global/Typography";
import { product_filter } from "@/utils/data";
import { ReusableSelect } from "../Global/FilterSelect";

const ProductLists = () => {
  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    if (product_filter) {
      isMounted(true);
    }
  }, []);
  return (
    <ProductListContainer>
      <Typography type="product-header-black" text="TEES" />
      <FilterContainer>
        <Filter>
          <Typography type="product-filter-black" text="Filter Products:" />
          {mounted && (
            <ReusableSelect data={product_filter[0]} type="modified" />
          )}

          {mounted && (
            <ReusableSelect data={product_filter[1]} type="modified" />
          )}
        </Filter>
        <Filter>
          <Typography type="product-filter-black" text="Sort Products:" />
          {mounted && (
            <ReusableSelect data={product_filter[2]} type="default" />
          )}
        </Filter>
      </FilterContainer>
      <ReuasbleProducts />
    </ProductListContainer>
  );
};

export default ProductLists;
