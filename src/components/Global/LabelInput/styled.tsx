import styled from "styled-components";

export const LabelInputContainer = styled.div`
  height: 70px;
  padding: 15px;
  box-shadow: 5px 5px 5px -5px rgba(27, 27, 27, 0.72);
  -webkit-box-shadow: 5px 5px 5px -5px rgba(27, 27, 27, 0.72);
  -moz-box-shadow: 5px 5px 5px -5px rgba(27, 27, 27, 0.72);
  display: flex;
  margin-top: 5px;
  width: 100%;
`;

export const Label = styled.label`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Seperator = styled.div`
  flex: 0.2;
  display: flex;
`;

export const Input = styled.input`
  flex: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px -5px rgba(27, 27, 27, 0.72) inset;
  -webkit-box-shadow: 5px 5px 5px -5px rgba(27, 27, 27, 0.72) inset;
  -moz-box-shadow: 5px 5px 5px -5px rgba(27, 27, 27, 0.72) inset;
`;
