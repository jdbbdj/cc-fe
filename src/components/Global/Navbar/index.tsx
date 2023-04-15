import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Center, Container, Left, Right, Wrapper } from "./styled";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Typography from "../Typography";
import Announcement from "./Announcement";
function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <MoonIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      );
    } else {
      return (
        <SunIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      );
    }
  };
  return (
    <Container className="bg-third-dark dark:bg-second-light ">
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
