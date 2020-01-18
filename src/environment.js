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

const base =
  "https://0379pmxh99.execute-api.us-east-1.amazonaws.com/dev/graphql";

const network = new RelayNetworkLayer(
  [
    cacheMiddleware({ size: 100, ttl: 900000 }),
    urlMiddleware({
      url: req => Promise.resolve(`${base}`)
    }),
    // __DEV__ ? loggerMiddleware() : null,
    // __DEV__ ? errorMiddleware() : null,
    // __DEV__ ? perfMiddleware() : null,
    false && loggerMiddleware(),
    false && perfMiddleware(),
    errorMiddleware(),
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

      // console.log('RelayRequest', req);
      const res = await next(req);
      // console.log('RelayResponse', res);

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

const firebaseConfig = {
  apiKey: "AIzaSyA6jt4dyojkJjB00V3Sr9v6O0TqvX_UYL8",
  authDomain: "careerdebut.firebaseapp.com",
  databaseURL: "https://careerdebut.firebaseio.com",
  projectId: "careerdebut",
  storageBucket: "careerdebut.appspot.com",
  messagingSenderId: "784269484523",
  appId: "1:784269484523:web:325cafb61a5c45c686b9ae",
  measurementId: "G-4VK8VC4Q0T"
};

export default environment;
