import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/Global/Layout";

const lightTheme = {
  backgroundColor: "white",
  textColor: "black",
  navbar: "#b3afb0",
  /*   --second-dark: #29323e;
  --third-dark: #b3afb0;
  --fourth-dark: #3e3a39;
  --main-light: #ededed;
  --second-light: #728393; */
};

const darkTheme = {
  backgroundColor: "black",
  textColor: "white",
  navbar: "#728393",
};

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleChange = (e: any) => {
    setIsDarkMode(e.target.checked);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <Layout handleToggleChange={handleToggleChange}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
