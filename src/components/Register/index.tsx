import React, { useState } from "react";

import {
  RegisterContainer,
  RegisterWrapper,
  RegisterFormWrapper,
  RegisterForm,
  RegisterToggleCont,
} from "./styled";

import LabelInput from "../Global/LabelInput";
import Button from "../Global/Button";
import Typography from "../Global/Typography";
import BoxToggleSwitch from "../Global/ToggleSwitch/BoxToggleSwitch";

const RegisterComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterFormWrapper>
          <RegisterForm>
            <Typography type="category-header-black" text="CREATE AN ACCOUNT" />
            <LabelInput labelText="First Name" />
            <LabelInput labelText="Middle Name" />
            <LabelInput labelText="Last Name" />
            <LabelInput labelText="E-mail" />
            <LabelInput labelText="Password" />
            <RegisterToggleCont>
              <BoxToggleSwitch
                checked={isChecked}
                handleChange={handleChange}
              />
              <Button
                type="default"
                classType={`bg-white mt-3`}
                text="SUBMIT"
              />
            </RegisterToggleCont>
          </RegisterForm>
        </RegisterFormWrapper>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default RegisterComponent;
