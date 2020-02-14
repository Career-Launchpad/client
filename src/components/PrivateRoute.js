import React from "react";
import { Route, Redirect } from "react-router-dom";

import Splash from "./Splash";
import { LOGIN } from "../utils/routes";
import { AUTH_STATE, AuthConsumer } from "../utils/auth";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <AuthConsumer>
          {({ state }) => {
            switch (state) {
              case AUTH_STATE.AUTHENTICATED:
                return children;
              case AUTH_STATE.PENDING:
                return <Splash />;
              default:
                return (
                  <Redirect
                    to={{ pathname: LOGIN.path, state: { from: location } }}
                  />
                );
            }
          }}
        </AuthConsumer>
      )}
    />
  );
};

export default PrivateRoute;
