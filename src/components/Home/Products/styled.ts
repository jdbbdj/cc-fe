import styled from "styled-components";
import Image from "next/image";

export const ProductContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const ProductSections = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  margin-top: 5px;
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

/*PRODUCTS PICTURES */

export const ProductItemWrapper = styled.div`
  flex: 1;
  position: relative;
  margin-right: 5px;
`;
export const ProductItemImage = styled(Image)`
  z-index: 25;
`;

export const ProductItemHover = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: 26;
  opacity: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProductActions = styled.div`
  z-index: 27;
  margin-right: 10px;
`;

/*Video */
export const VideoWrapper = styled.div`
  height: 45%;
  width: 100%;
  margin-top: 45px;
`;
