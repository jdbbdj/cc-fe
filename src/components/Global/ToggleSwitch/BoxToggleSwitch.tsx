import React, { useState } from "react";
import { BoxToggleContainer, BoxToggleLabel } from "./styled";

type Props = {
  checked: boolean;
  handleChange: (e: any) => void;
};
const BoxToggleSwitch = ({ checked, handleChange }: Props) => {
  return (
    <BoxToggleContainer>
      <BoxToggleLabel>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => handleChange(e)}
        />
        <span>
          <p>Male</p>
          <p className="ml-5">Female</p>
        </span>
      </BoxToggleLabel>
    </BoxToggleContainer>
  );
};

export default BoxToggleSwitch;
