import styled from "styled-components";

export const ProductLabelContainer = styled.div`
  padding: 5px;
  display: flex;
  margin-top: 2.5px;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
`;

export const OrderSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Color = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;
