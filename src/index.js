import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles";
import styles from "styles/theme";
import App from "./App";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />

    <ThemeProvider theme={styles}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
