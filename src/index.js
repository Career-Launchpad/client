import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Amplify from "aws-amplify";

import { darkTheme, lightTheme } from "./theme";
import awsconfig from "./aws-exports";
import "./index.css";
import App from "./App";

Amplify.configure(awsconfig);

const Root = () => {
  const theme =
    (localStorage.getItem("career-debut-theme") || "light") === "light"
      ? lightTheme
      : darkTheme;
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
