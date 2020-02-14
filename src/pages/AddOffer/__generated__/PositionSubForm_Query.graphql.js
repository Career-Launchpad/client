/**
 * @flow
 * @relayHash db541626ff1a982cdd2f1085bf1d37ba
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PositionSubForm_QueryVariables = {||};
export type PositionSubForm_QueryResponse = {|
  +store: ?{|
    +company_names: ?$ReadOnlyArray<?string>
  |}
|};
export type PositionSubForm_Query = {|
  variables: PositionSubForm_QueryVariables,
  response: PositionSubForm_QueryResponse,
|};
*/


/*
query PositionSubForm_Query {
  store {
    company_names
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "company_names",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PositionSubForm_Query",
    "type": "query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "store",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PositionSubForm_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "store",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PositionSubForm_Query",
    "id": null,
    "text": "query PositionSubForm_Query {\n  store {\n    company_names\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6748755203665f38ec0e742619104324';
module.exports = node;
