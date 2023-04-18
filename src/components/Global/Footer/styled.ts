import styled from "styled-components";
import Image from "next/image";
export const Container = styled.section`
  width: 100%;
  height: 50vh;
  position: relative;
  padding-left: 25px;
  padding-right: 25px;
`;

export const FooterWrapper = styled.div`
  background-color: rgba(41, 50, 62, 1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FooterUpper = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterMiddle = styled.div`
  flex: 0.7;
  display: flex;
  padding: 10px;
`;

export const FooterMiddleLeft = styled.div`
  flex: 1;
  display: flex;
`;

export const FooterDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FooterMiddleRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FooterMiddleRightWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export const FooterLower = styled.div`
  flex: 0.1;
  justify-content: center;
  width: 100%;

  display: flex;
`;

export const LowerWrapper = styled.div`
  width: 97.5%;
  border-top: 2px solid white;
`;
