import React, { useState } from "react";
import {
  ProductItemImage,
  ProductItemWrapper,
  ProductItemHover,
  ProductActions,
} from "../styled";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
type Props = {
  key: string;
  product: {
    title: string;
    img: string;
    id: number;
  };
};

const ProductItem = (props: Props) => {
  const { product } = props;
  return (
    <ProductItemWrapper>
      <ProductItemImage
        alt={`Product ${product.id}`}
        src={product.img}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      <ProductItemHover>
        <ProductActions>
          <MagnifyingGlassIcon width={24} height={24} fill="white" />
        </ProductActions>
        <ProductActions>
          <HeartIcon width={24} height={24} fill="white" />
        </ProductActions>
        <ProductActions>
          <ShoppingCartIcon width={24} height={24} fill="white" />
        </ProductActions>
      </ProductItemHover>
    </ProductItemWrapper>
  );
};

export default ProductItem;
