import React from "react";
import { Input, LabelInputContainer, Label, Seperator } from "./styled";

type Props = {
  labelText: string;
};

const LabelInput = ({ labelText }: Props) => {
  return (
    <LabelInputContainer>
      <Label>{labelText}</Label>
      <Seperator />
      <Input />
    </LabelInputContainer>
  );
};

export default LabelInput;
