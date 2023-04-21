import styled from "styled-components";
import Image from "next/image";
export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const AboutContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 350px;
`;

export const HeroWrapper = styled.div`
  display: flex;
`;

export const CustomImage = styled(Image)`
  flex: 1;
  margin-top: 50px;
  max-height: 450px;
  right: 5%;
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

/*ABOUT*/

export const AboutWrapper = styled.div`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AboutUpper = styled.div`
  flex: 0.7;
  background-color: rgba(114, 131, 147, 1);
  display: flex;
  padding: 10px;
`;

export const AboutDivs = styled.div`
  flex: 1;
  padding-right: 50px;
`;

export const AboutLower = styled.div`
  flex: 0.3;
  background-color: rgba(226, 220, 210, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;
