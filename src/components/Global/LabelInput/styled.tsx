import styled from "styled-components";

export const LabelInputContainer = styled.div`
  height: 70px;
  padding: 15px;
  box-shadow: 1px 3px 0px 1px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 1px 3px 0px 1px rgba(0, 0, 0, 1);
  -moz-box-shadow: 1px 3px 0px 1px rgba(0, 0, 0, 1);
  display: flex;
  margin-top: 5px;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  width: 120px;
  align-items: center;
`;

export const Seperator = styled.div`
  display: flex;
  width: 20px;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px -5px rgba(27, 27, 27, 0.72) inset;
  -webkit-box-shadow: 5px 5px 5px -5px rgba(27, 27, 27, 0.72) inset;
  -moz-box-shadow: 5px 5px 5px -5px rgba(27, 27, 27, 0.72) inset;
`;
