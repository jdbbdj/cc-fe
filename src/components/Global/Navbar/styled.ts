import styled from "styled-components";

export const Container = styled.div`
  height: 75px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Right = styled.div`
  //this design is for mother component
  flex: 1;
  //this design is for its child
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItems = styled.div`
  margin-left: 22px;
`;
