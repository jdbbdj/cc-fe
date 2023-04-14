import Layout from "@/components/Global/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
