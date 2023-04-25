import React, { useEffect, useState } from "react";
import {
  CartContainer,
  CartWrapper,
  CartUpper,
  CartLower,
  CartUpperFirst,
  CartUpperSecond,
  CartLowerLeft,
  CartLowerRight,
  CartUpperSecondCenter,
} from "./styled";
import { cart_data } from "@/utils/data";
import { formatNumber } from "@/utils/utils";
import Typography from "../Global/Typography";
import Button from "../Global/Button";
import CartItem from "./CartItem";
import ProductLabel from "../Global/ProductLabel";

const ProductLists = () => {
  const [mounted, isMounted] = useState(false);
  useEffect(() => {
    if (cart_data) {
      isMounted(true);
    }
  }, []);

  return (
    <CartContainer>
      <CartWrapper>
        <CartUpper>
          <CartUpperFirst>
            <Typography text="YOUR CART" type="category-header-black" />
          </CartUpperFirst>
          <CartUpperSecond>
            <Button type="custom-default" text="Continue Shopping" />
            <CartUpperSecondCenter>
              <Typography text="Shopping bag(0)" type="about" />
              <Typography text="Your wishlist(0)" type="about" />
            </CartUpperSecondCenter>
            <Button type="custom-default" text="Payment method" />
          </CartUpperSecond>
        </CartUpper>
        <CartLower>
          <CartLowerLeft>
            {cart_data.items.map((item, key) => {
              return <CartItem item={item} key={key} />;
            })}
          </CartLowerLeft>
          <CartLowerRight>
            <Typography text="ORDER SUMMARY" type="category-header-black" />
            <ProductLabel
              type="order-summary"
              detailsLabel="Subtotal:"
              details="10.00"
            />

            <ProductLabel
              type="order-summary"
              detailsLabel="Shipping:"
              details="5.99"
            />
            <ProductLabel
              type="order-summary"
              detailsLabel="Discount:"
              details="0"
            />
            <ProductLabel
              type="order-summary"
              detailsLabel="Total:"
              details="144.00"
            />
            <Button type="custom-default w-10 h-10" text="Checkout now" />
          </CartLowerRight>
        </CartLower>
      </CartWrapper>
    </CartContainer>
  );
};

export default ProductLists;
