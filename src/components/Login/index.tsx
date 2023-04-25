import React, { useState } from "react";

import {
  LoginContainer,
  LoginWrapper,
  LoginForm,
  LoginFormWrapper,
} from "./styled";
import Logo from "../../../public/svg/login";
import LabelInput from "../Global/LabelInput";
import Button from "../Global/Button";
import Typography from "../Global/Typography";

const LoginComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <Logo style={{ flex: 1 }} />
        <LoginFormWrapper>
          <LoginForm>
            <Typography type="category-header-black" text="LOGIN" />
            <LabelInput labelText="Username" />
            <LabelInput labelText="Password" />
            <Button type="default" classType={`bg-white mt-5`} text="SUBMIT" />
          </LoginForm>
        </LoginFormWrapper>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginComponent;
