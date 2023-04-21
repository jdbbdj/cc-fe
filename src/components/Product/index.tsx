import React, { useEffect, useState } from "react";
import {
  ProductContainer,
  ProductWrapper,
  ProductImageContainer,
  ProductImage,
  ProductInfoContainer,
  FilterContainer,
  Filter,
  FilterColor,
  CTAContainer,
} from "./styled";
import { product_data } from "@/utils/data";
import { formatNumber } from "@/utils/utils";
import Typography from "../Global/Typography";
import { ReusableSelect } from "../Global/FilterSelect";
import ReusableIterator from "../Global/Iterator";
import Button from "../Global/Button";

const ProductLists = () => {
  const [mounted, isMounted] = useState(false);
  const [selected, isSelected] = useState(0);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    if (product_data) {
      isMounted(true);
    }
  }, []);

  const handleClick = (index: number) => {
    isSelected(index);
  };

  const increaseAmount = (num: number) => {
    console.log("HERE2");
    setAmount((num += 1));
  };

  const decreaseAmount = (num: number) => {
    if (num === 0) {
      return num;
    } else {
      console.log("HERE");
      setAmount((num -= 1));
    }
  };

  return (
    <ProductContainer>
      <ProductWrapper>
        <ProductImageContainer>
          <ProductImage
            alt="Product Image"
            src={product_data.img}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </ProductImageContainer>
        <ProductInfoContainer>
          <Typography type="product-header-black" text={product_data.title} />
          <Typography type="about" text={product_data.description} />
          <Typography
            classType="mt-10"
            type="product-amount"
            text={`Price: $${formatNumber(product_data.price)}`}
          />
          <FilterContainer>
            <Filter>
              <Typography type="about" text={"Colors: "} />
              {product_data.colors.map((color, index) => {
                return (
                  <FilterColor
                    key={index}
                    color={color.code}
                    className={
                      selected === index
                        ? `border-2 border-gray shadow rounded-lg scale-150`
                        : ""
                    }
                    onClick={() => handleClick(index)}
                  />
                );
              })}
            </Filter>
            <Filter>
              <Typography type="about" text={"Sizes: "} />
              {mounted && <ReusableSelect type="default" data={product_data} />}
            </Filter>
          </FilterContainer>
          <CTAContainer>
            <ReusableIterator
              classType=""
              amount={amount}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
            />
            <Button type="default" classType="mt-10" text="ADD TO CART" />
          </CTAContainer>
        </ProductInfoContainer>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ProductLists;
