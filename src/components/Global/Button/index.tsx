import React from "react";
import Typography from "../Typography";
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
  default_white: {
    fontSize: 14,
    fontWeight: "400",
  },
  default: {
    border: "1px solid black",
    width: 150,
    padding: 15,
    boxShadow: "10px 15px 0px #000000",
  },
};
const Button = (props: Props) => {
  const { classType, type, text } = props;
  const typeHandler = () => {
    switch (type) {
      case "header":
        return styles.header;
      case "default-white":
        return styles.default_white;
      case "default":
        return styles.default;
      default:
        return styles.default;
    }
  };
  return (
    <button className={`main-text ${classType}`} style={typeHandler()}>
      <Typography text={text} type="button" />
    </button>
  );
};
Button.defaultProps = {
  classType: "",
};
export default Button;
