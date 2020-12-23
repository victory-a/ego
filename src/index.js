import React from "react";
import ReactDOM from "react-dom";
import { ReactQueryDevtools } from "react-query-devtools";
import { ReactQueryConfigProvider } from "react-query";
import GlobalStyles from "styles";
import styles from "styles/theme";
import App from "./App";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import AuthProvider from "contexts/AuthContext";

const queryConfig = {
  queries: {
    retry: 0,
    throwOnError: false,
    useErrorBoundary: false,
    refetchOnWindowFocus: false
  }
};

ReactDOM.render(
  <>
    <ReactQueryDevtools initialIsOpen={false} />

    <ReactQueryConfigProvider config={queryConfig}>
      <GlobalStyles />

      <ThemeProvider theme={styles}>
        <CSSReset />

        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </ReactQueryConfigProvider>
  </>,
  document.getElementById("root")
);
