import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { getCurrentTheme } from "./theme";
import App from "./App";
import "./index.css";

const Root = () => {
  const theme = getCurrentTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssBaseline />
          <App />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
