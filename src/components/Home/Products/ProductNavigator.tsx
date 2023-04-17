import React, { useState } from "react";
import { ProductNavWrapper, ProductsNav } from "./styled";
import { productsNavigation } from "@/utils/data";
import Typography from "@/components/Global/Typography";

const ProductNavigator = () => {
  const [tab, setTab] = useState(0);

  const handleClick = (id: number) => {
    setTab(id);
  };
  return (
    <ProductNavWrapper>
      {productsNavigation.map((navs) => {
        return (
          <ProductsNav
            key={navs.id}
            className={navs.id === tab ? "opacity-100" : "opacity-50"}
            onClick={() => {
              handleClick(navs.id);
            }}
          >
            <Typography type="subheader" text={navs.title} />
          </ProductsNav>
        );
      })}
    </ProductNavWrapper>
  );
};

export default ProductNavigator;
