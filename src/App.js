import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CssBaseline from "@material-ui/core/CssBaseline";
import DateFnsUtils from "@date-io/date-fns";

import { Routes, DEFAULT } from "./utils/routes";
import PrivateRoute from "./components/PrivateRoute";

import { AuthProvider } from "./utils/auth";
import { ThemeProvider } from "./utils/theme";
import "./index.css";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider>
            <CssBaseline />
            <Switch>
              {Routes.map(route => {
                const RouteElem = route.protected ? PrivateRoute : Route;
                const RouteComponent = route.component;
                return (
                  <RouteElem key={route.path} path={route.path}>
                    {<RouteComponent />}
                  </RouteElem>
                );
              })}
              <PrivateRoute>
                <Redirect to={DEFAULT.path} />
              </PrivateRoute>
            </Switch>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
