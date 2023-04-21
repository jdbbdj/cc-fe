import React from "react";
type Props = {
  text: string;
  type: string;
  classType?: string;
};

const styles = {
  header: {
    color: "black",
    fontSize: 32,
    fontWeight: "700",
  },
  sub_header: {
    fontSize: 22,
    fontWeight: "400",
  },
  category_header: {
    fontSize: 22,
    fontWeight: "700",
  },
  product_header: {
    fontSize: 32,
    fontWeight: "600",
  },
  product_filter: {
    fontSize: 14,
    fontWeight: "700",
    opacity: 0.8,
  },
  button: {
    color: "black",
    fontSize: 14,
    fontWeight: "700",
  },
  about: {
    fontSize: 18,
    fontWeight: "400",
  },
  product_nav: {
    fontSize: 28,
  },

  product_amount: {
    fontSize: 32,
  },
  default_white: {
    fontSize: 14,
    fontWeight: "400",
  },

  default: {
    color: "black",
    fontSize: 14,
    fontWeight: "400",
  },
};
const Typography = (props: Props) => {
  const { classType, type, text } = props;
  const classHandler = () => {
    switch (type) {
      case "subheader-white":
      case "category-header":
      case "default-white":
        return "text-white";
      case "subheader":
      case "product-nav":
      case "about":
      case "category-header-black":
      case "product-header-black":
      case "product-filter-black":
      case "product-amount":
        return "text-black dark:text-white";
    }
  };
  const typeHandler = () => {
    switch (type) {
      case "header":
        return styles.header;
      case "product-nav":
        return styles.product_nav;
      case "subheader-white":
      case "subheader":
        return styles.sub_header;
      case "category-header":
      case "category-header-black":
        return styles.category_header;
      case "product-header-black":
        return styles.product_header;
      case "product-filter-black":
        return styles.product_filter;
      case "product-amount":
        return styles.product_amount;
      case "button":
        return styles.button;
      case "default-white":
        return styles.default_white;
      case "about":
        return styles.about;
      case "default":
        return styles.default;
      default:
        return styles.default;
    }
  };
  return (
    <p
      className={`main-text ${classType} ${classHandler()}`}
      style={typeHandler()}
    >
      {text}
    </p>
  );
};
Typography.defaultProps = {
  classType: "",
};
export default Typography;
