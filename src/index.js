import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles";
import styles from "styles/theme";
import App from "./App";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import AuthProvider from "contexts/AuthContext";

ReactDOM.render(
  <>
    <GlobalStyles />

    <ThemeProvider theme={styles}>
      <CSSReset />

      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
