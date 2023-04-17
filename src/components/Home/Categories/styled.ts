import styled from "styled-components";
import Image from "next/image";
export const CategoryContainer = styled.div`
  display: flex;
  padding-right: 150px;
  padding-left: 150px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CategoryItemContainer = styled.div`
  margin-top: 10px;
  position: relative;
`;

export const CategoryImage = styled(Image)``;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 0%;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
