import styled from "styled-components";
import Image from "next/image";
export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const HeroWrapper = styled.div`
  display: flex;
`;

export const CustomImage = styled(Image)`
  flex: 1;
  margin-top: 50px;
  height: 450px;
`;

export const HeroRight = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
`;
