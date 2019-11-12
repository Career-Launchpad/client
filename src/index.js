import React from "react";
import ReactDOM from "react-dom";
import { Resolver } from "found-relay";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import Amplify, { API, graphqlOperation } from "aws-amplify";

import awsconfig from "./aws-exports";
import Router from "./router";
import "./index.css";

Amplify.configure(awsconfig);

function fetchQuery(operation, variables) {
  return API.graphql(graphqlOperation(operation.text, variables));
}

function subscribe(operation, variables) {
  return API.graphql(graphqlOperation(operation.text, variables)).map(
    ({ value }) => value
  );
}

const environment = new Environment({
  network: Network.create(fetchQuery, subscribe),
  store: new Store(new RecordSource())
});

ReactDOM.render(
  <Router resolver={new Resolver(environment)} />,
  document.getElementById("root")
);
