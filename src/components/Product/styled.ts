import styled from "styled-components";
import Image from "next/image";
export const ProductContainer = styled.div`
  height: 100vh;
  padding: 10px 25px;
`;

export const ProductWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled(Image)`
  object-fit: cover;
`;

export const ProductInfoContainer = styled.div`
  flex: 0.5;
  margin: 20px 25px;
  display: flex;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  border: 1px solid black;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`;
