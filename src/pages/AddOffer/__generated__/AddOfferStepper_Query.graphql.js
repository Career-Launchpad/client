/**
 * @flow
 * @relayHash 7cc3ea8cdb357e9fbc01f4b49be7fe30
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddOfferStepper_QueryVariables = {||};
export type AddOfferStepper_QueryResponse = {|
  +store: ?{|
    +company_names: ?$ReadOnlyArray<?string>
  |}
|};
export type AddOfferStepper_Query = {|
  variables: AddOfferStepper_QueryVariables,
  response: AddOfferStepper_QueryResponse,
|};
*/


/*
query AddOfferStepper_Query {
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
    "name": "AddOfferStepper_Query",
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
    "name": "AddOfferStepper_Query",
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
    "name": "AddOfferStepper_Query",
    "id": null,
    "text": "query AddOfferStepper_Query {\n  store {\n    company_names\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '49090c9520f812bf1a4615fb958cf7da';
module.exports = node;
