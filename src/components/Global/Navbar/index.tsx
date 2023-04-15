import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Container } from "./styled";
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
      return <button onClick={() => setTheme("dark")}>dark</button>;
    } else {
      return <button onClick={() => setTheme("light")}>light</button>;
    }
  };
  return (
    <Container className="bg-second-dark">{renderThemeChanger()}</Container>
  );
}

export default Navbar;
