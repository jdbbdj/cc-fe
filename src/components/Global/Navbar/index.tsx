import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { Center, Container, Left, Right, Wrapper } from "./styled";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Typography from "../Typography";
import Announcement from "./Announcement";
import ToggleSwitch from "../ToggleSwitch";

type Props = {
  handleToggleChange: any;
};
function Navbar({ handleToggleChange }: Props) {
  const [mounted, setMounted] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: any) => {
    setIsChecked(e.target.checked);
    handleToggleChange(e);
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    return <ToggleSwitch checked={isChecked} handleChange={handleChange} />;
  };
  return (
    <Container>
      <Announcement />
      <Wrapper>
        <Left>
          <Image src="/svg/logo.svg" alt="Logo" width={48} height={48} />
        </Left>
        <Center>
          <Typography type="header" text="CONG CLOTHING" />
        </Center>
        <Right>
          <Typography classType="mr-2" type="default" text="REGISTER" />
          <Typography classType="mr-2" type="default" text="SIGN IN" />
          <Image
            className="mr-2"
            src="/svg/shopping.svg"
            alt="Shopping"
            color={"white"}
            width={24}
            height={24}
          />
          <div>{renderThemeChanger()}</div>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
