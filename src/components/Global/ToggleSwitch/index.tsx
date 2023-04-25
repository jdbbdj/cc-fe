import React, { useState } from "react";
import { ToggleLabel } from "./styled";

type Props = {
  checked: boolean;
  handleChange: (e: any) => void;
};
const ToggleSwitch = ({ checked, handleChange }: Props) => {
  return (
    <ToggleLabel>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      <span></span>
    </ToggleLabel>
  );
};

export default ToggleSwitch;
