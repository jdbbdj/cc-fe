import React from "react";
import CategoryItem from "./CategoryItem";
import { CategoryContainer } from "./styled";
import { categories } from "@/utils/data";
function Categories() {
  return (
    <CategoryContainer>
      {categories.map((item) => {
        return (
          <CategoryItem
            id={item.id}
            src={item.img}
            title={item.title.toUpperCase()}
          />
        );
      })}
    </CategoryContainer>
  );
}

export default Categories;
