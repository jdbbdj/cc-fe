import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Container } from "./styled";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
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
    <Container className="bg-second-dark dark:bg-main-light  trainsition-bg">
      <div className="bg-main-dark dark:bg-second-light h-6 w-6 transition-bg"></div>
      <div>{renderThemeChanger()}</div>
    </Container>
  );
}

export default Navbar;
