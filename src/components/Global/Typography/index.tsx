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
  default_white: {
    color: "white",
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
