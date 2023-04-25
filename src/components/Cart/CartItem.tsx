import React, { useState } from "react";
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemDetailsLeft,
  CartItemDetailsRight,
} from "./styled";
import Typography from "../Global/Typography";
import ReusableIterator from "../Global/Iterator";
import ProductLabel from "../Global/ProductLabel";
type Props = {
  item: {
    title: string;
    description: string;
    price: number;
    img: string;
    color: { code: string; name: string }[];
    size: { code: string; name: string }[];
    amount: number;
  };
};

const CartItem = ({ item }: Props) => {
  const [amount, setAmount] = useState(item.amount);

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
    <CartItemContainer>
      <CartItemImage
        src={item.img}
        alt="CARTITEM IMAGE"
        width={140}
        height={140}
      />
      <CartItemDetails>
        <CartItemDetailsLeft>
          <ProductLabel type="title" details={item.title} />
          <ProductLabel type="id" details={"123456778"} />
          <ProductLabel type="color" details="#000000" />
          <ReusableIterator
            classType="mr-10"
            amount={amount}
            increaseAmount={increaseAmount}
            decreaseAmount={decreaseAmount}
          />
        </CartItemDetailsLeft>
        <CartItemDetailsRight></CartItemDetailsRight>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
