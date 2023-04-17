import React from "react";

import { CategoryImage, CategoryItemContainer, InfoWrapper } from "./styled";
import Typography from "@/components/Global/Typography";
import Button from "@/components/Global/Button";
type Props = {
  src: string;
  title: string;
  id: number;
};
function CategoryItem(props: Props) {
  const { src, title, id } = props;
  return (
    <CategoryItemContainer>
      <CategoryImage
        alt={`Category Image ${id}`}
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      <InfoWrapper
        className={`${id === 4 || id === 5 ? "ml-7 mt-10" : "ml-0"}`}
      >
        <Typography text={title} type="category-header" />
        <Button classType={`bg-white `} type="default" text="SHOP NOW >" />
      </InfoWrapper>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
