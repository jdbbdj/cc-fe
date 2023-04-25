import styled from "styled-components";
import Image from "next/image";
export const CartContainer = styled.div`
  min-height: 50vh;
  padding: 10px 25px;
`;

export const CartWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
1;

export const CartUpper = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
`;

export const CartUpperFirst = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartUpperSecond = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0px;
`;

export const CartUpperSecondCenter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;

  p {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const CartLower = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: row;
`;

export const CartLowerLeft = styled.div`
  flex: 0.6;
  padding: 5px 10px;
`;

export const CartLowerRight = styled.div`
  flex: 0.4;
  border: 1px solid #c5c5c5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 35vh;
`;

/**************************CART ITEM*************************************/

export const CartItemContainer = styled.div`
  height: 150px;
  padding: 5px 25px;
  margin-top: 10px;
  box-shadow: 1px 2px 5px -1px rgba(0, 0, 0, 0.42);
  -webkit-box-shadow: 1px 2px 5px -1px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 1px 2px 5px -1px rgba(0, 0, 0, 0.42);
  display: flex;
`;

export const CartItemImage = styled(Image)`
  object-fit: cover;
`;

export const CartItemDetails = styled.div`
  width: 100%;
  margin-left: 20px;
  display: flex;
`;

export const CartItemDetailsLeft = styled.div`
  flex: 0.7;
`;

export const CartItemDetailsRight = styled.div`
  flex: 0.3;
`;
