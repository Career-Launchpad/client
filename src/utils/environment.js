import { Environment, RecordSource, Store } from "relay-runtime";
import {
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
  retryMiddleware,
  cacheMiddleware
} from "react-relay-network-modern";

const __DEV__ = process.env.NODE_ENV === "development";

const baseLookup = {
  development: "https://0379pmxh99.execute-api.us-east-1.amazonaws.com/dev",
  production: "https://xhjdqriuvb.execute-api.us-east-1.amazonaws.com/prod",
  local: "http://127.0.0.1:8080"
};

// const URL_BASE = baseLookup[process.env.NODE_ENV];
const URL_BASE = baseLookup["local"];

const graphqlEndpoint = `${URL_BASE}/graphql`;

console.log(process.env.NODE_ENV, URL_BASE);

const network = new RelayNetworkLayer(
  [
    cacheMiddleware({ size: 100, ttl: 900000 }),
    urlMiddleware({
      url: req => Promise.resolve(`${graphqlEndpoint}`)
    }),
    __DEV__ ? loggerMiddleware() : null,
    __DEV__ ? errorMiddleware() : null,
    __DEV__ ? perfMiddleware() : null,
    retryMiddleware({
      fetchTimeout: 15000,
      retryDelays: attempt => Math.pow(2, attempt + 4) * 100, // or simple array [3200, 6400, 12800, 25600, 51200, 102400, 204800, 409600],
      beforeRetry: ({ forceRetry, abort, delay, attempt, lastError, req }) => {
        if (attempt > 10) abort();
        window.forceRelayRetry = forceRetry;
        console.log(
          "call `forceRelayRetry()` for immediately retry! Or wait " +
            delay +
            " ms."
        );
      },
      statusCodes: [500, 503, 504]
    }),

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

const environment = new Environment({
  handlerProvider,
  network,
  store
});

export { environment as default, URL_BASE };
