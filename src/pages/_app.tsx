import GlobalStyle from "../styles/global";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/colors";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout ? Component.layout : React.Fragment;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
