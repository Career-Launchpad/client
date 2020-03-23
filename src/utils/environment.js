import React, { useContext } from "react";
import { Environment, RecordSource, Store } from "relay-runtime";
import {
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
  cacheMiddleware,
  authMiddleware
} from "react-relay-network-modern";
import { useAuth } from "./auth";

const __DEV__ = process.env.NODE_ENV === "development";

const baseLookup = {
  development: "https://0379pmxh99.execute-api.us-east-1.amazonaws.com/dev",
  production: "https://xhjdqriuvb.execute-api.us-east-1.amazonaws.com/prod",
  local: "http://127.0.0.1:8080"
};

///////////////////////////////////////////////
// const URL_BASE = baseLookup[process.env.NODE_ENV]; // Comment out for local testing
   const URL_BASE = baseLookup["production"]; // Uncomment for local testing
//   TODO: Work off prod after braden's PR is merged
//
//  DON'T INCLUDE THIS IN PULL REQUEST
//
///////////////////////////////////////////////

const graphqlEndpoint = `${URL_BASE}/graphql`;

const newEnvironment = token => {
  const network = new RelayNetworkLayer(
    [
      cacheMiddleware({ size: 100, ttl: 900000 }),
      urlMiddleware({
        url: req => Promise.resolve(`${graphqlEndpoint}`)
      }),
      authMiddleware({
        token,
        allowEmptyToken: false
      }),
      __DEV__ ? loggerMiddleware() : null,
      __DEV__ ? errorMiddleware() : null,
      __DEV__ ? perfMiddleware() : null,

      // example of the custom inline middleware
      next => async req => {
        req.fetchOpts.mode = "cors"; // allow cors requests
        req.fetchOpts.credentials = "same-origin"; // allow to send cookies (sending credentials to same domains)
        const res = await next(req);
        return res;
      }
    ],
    {}
  );

  const source = new RecordSource();
  const store = new Store(source);
  const handlerProvider = null;
  return new Environment({ handlerProvider, network, store });
};

const EnvironmentContext = React.createContext();

const useEnvironment = () => useContext(EnvironmentContext);

const EnvironmentProvider = ({ children }) => {
  const { user } = useAuth();
  const token = user ? user.getIdToken() : "";
  return (
    <EnvironmentContext.Provider value={newEnvironment(token)}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export { EnvironmentProvider, useEnvironment };
