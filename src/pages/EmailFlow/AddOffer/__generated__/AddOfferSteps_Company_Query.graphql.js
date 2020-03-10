/**
 * @flow
 * @relayHash d3090f829e443b446e7629ab6c920765
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddOfferSteps_Company_QueryVariables = {||};
export type AddOfferSteps_Company_QueryResponse = {|
  +store: ?{|
    +company_names: ?$ReadOnlyArray<?string>
  |}
|};
export type AddOfferSteps_Company_Query = {|
  variables: AddOfferSteps_Company_QueryVariables,
  response: AddOfferSteps_Company_QueryResponse,
|};
*/


/*
query AddOfferSteps_Company_Query {
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
    "name": "AddOfferSteps_Company_Query",
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
    "name": "AddOfferSteps_Company_Query",
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
    "name": "AddOfferSteps_Company_Query",
    "id": null,
    "text": "query AddOfferSteps_Company_Query {\n  store {\n    company_names\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bd64dd76d4303477cf6276861c3cb23e';
module.exports = node;
