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
    color: "black",
    fontSize: 22,
    fontWeight: "400",
  },
  button: {
    color: "black",
    fontSize: 14,
    fontWeight: "700",
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
  const typeHandler = () => {
    switch (type) {
      case "header":
        return styles.header;
      case "subheader":
        return styles.subheader;
      case "button":
        return styles.button;
      case "default-white":
        return styles.default_white;
      case "default":
        return styles.default;
      default:
        return styles.default;
    }
  };
  return (
    <p className={`main-text ${classType}`} style={typeHandler()}>
      {text}
    </p>
  );
};
Typography.defaultProps = {
  classType: "",
};
export default Typography;
