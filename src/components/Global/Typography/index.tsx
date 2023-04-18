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
  subheader: {
    fontSize: 22,
    fontWeight: "400",
  },
  categoryheader: {
    fontSize: 22,
    fontWeight: "700",
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
        return styles.subheader;
      case "category-header":
      case "category-header-black":
        return styles.categoryheader;
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
