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
          {({ state }) => (
            <>
              {state === AUTH_STATE.AUTHENTICATED && children}
              {state === AUTH_STATE.PENDING && <Splash />}
              {state === AUTH_STATE.NOT_AUTHENTICATED && (
                <Redirect
                  to={{ pathname: LOGIN.path, state: { from: location } }}
                />
              )}
            </>
          )}
        </AuthConsumer>
      )}
    />
  );
};

export default PrivateRoute;
