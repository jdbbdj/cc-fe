import React from "react";
import {
  ProductLabelContainer,
  Label,
  Color,
  OrderSummaryContainer,
} from "./styled";
import Typography from "../Typography";

type Props = {
  type: string;
  details: string;
  detailsLabel: string;
};

const ProductLabel = ({ type, details, detailsLabel }: Props) => {
  const typeHandler = () => {
    if (type === "title") {
      return <Label>PRODUCT: {details}</Label>;
    } else if (type === "id") {
      return <Label>ID: {details}</Label>;
    } else if (type === "order-summary") {
      return (
        <OrderSummaryContainer>
          <Typography type="product-filter-black" text={detailsLabel} />
          <Typography type="product-filter-black" text={details} />
        </OrderSummaryContainer>
      );
    } else {
      return (
        <Label>
          <Color color={details} />
        </Label>
      );
    }
  };
  return <ProductLabelContainer>{typeHandler()}</ProductLabelContainer>;
};

ProductLabel.defaultProps = {
  detailsLabel: "",
};

export default ProductLabel;
