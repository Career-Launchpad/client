import { API, graphqlOperation } from "aws-amplify";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchQuery = (operation, variables) => {
  return API.graphql(graphqlOperation(operation.text, variables));
};

const subscribe = (operation, variables) => {
  return API.graphql(graphqlOperation(operation.text, variables)).map(
    ({ value }) => value
  );
};

const environment = new Environment({
  network: Network.create(fetchQuery, subscribe),
  store: new Store(new RecordSource())
});

export default environment;
