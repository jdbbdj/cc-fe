import React from "react";
import { IteratorContainer, Iterators, IteratorAmount } from "./style";
import Typography from "../Typography";
type Props = {
  classType: string;
  increaseAmount: (num: number) => void;
  decreaseAmount: (num: number) => void;
  amount: number;
};

const ReusableIterator = ({
  classType,
  increaseAmount,
  decreaseAmount,
  amount,
}: Props) => {
  return (
    <IteratorContainer className={classType}>
      <Iterators onClick={() => decreaseAmount(amount)}>
        <Typography type="about" text="-" />
      </Iterators>
      <IteratorAmount>
        <Typography type="about" text={amount.toString()} />
      </IteratorAmount>
      <Iterators onClick={() => increaseAmount(amount)}>
        <Typography type="about" text="+" />
      </Iterators>
    </IteratorContainer>
  );
};

export default ReusableIterator;
