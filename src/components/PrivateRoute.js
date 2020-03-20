import React from "react";
import { Route, Redirect } from "react-router-dom";

import Splash from "./Splash";
import { LOGIN } from "../utils/routes";
import { AUTH_STATE, useAuth } from "../utils/auth";

const PrivateRoute = ({ children, ...rest }) => {
  const { state } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <>
          {state === AUTH_STATE.AUTHENTICATED ? (
            children
          ) : state === AUTH_STATE.PENDING ? (
            <Splash />
          ) : (
            <Redirect
              to={{ pathname: LOGIN.path, state: { from: location } }}
            />
          )}
        </>
      )}
    />
  );
};

export default PrivateRoute;
