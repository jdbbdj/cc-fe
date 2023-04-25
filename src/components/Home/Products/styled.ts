import styled from "styled-components";
import Image from "next/image";

/*PRODUCTS PICTURES */

export const ProductItemImage = styled(Image)`
  z-index: 25;
`;

export const ProductItemHover = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: 26;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: "black";
`;

export const ProductItemWrapper = styled.div`
  position: relative;
  margin-top: 10px;
  margin-right: 5px;
  //280px for production
  max-width: 200px;
  &:hover ${ProductItemHover} {
    opacity: 0.7;
  }
`;

export const ProductActions = styled.div`
  z-index: 27;
  margin-right: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  cursor: pointer;
`;

export const ProductSections = styled.div`
  display: flex;
  margin-top: 5px;
  flex-wrap: wrap;
  justify-content: center;
`;

/*PRODUCTS NAVIGATION*/
export const ProductNavWrapper = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
`;

export const ProductsNav = styled.div`
  margin-right: 50px;
  cursor: pointer;
  transition: opacity 0.25s ease-in-out;
`;

/*Video */
export const VideoWrapper = styled.div`
  height: 45%;
  width: 100%;
  margin-top: 45px;
`;
