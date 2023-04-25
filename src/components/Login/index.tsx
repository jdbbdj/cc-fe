import React, { useState } from "react";
import useNavigation from "@/pages/navigation/useNavigation";
import {
  LoginContainer,
  LoginWrapper,
  LoginForm,
  LoginFormWrapper,
} from "./styled";
import Logo from "../../../public/svg/login";
import LabelInput from "../Global/LabelInput";
import Button from "../Global/Button";
const LoginComponent = () => {
  const { router } = useNavigation();
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
