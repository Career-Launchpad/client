/**
 * @flow
 * @relayHash 716653b09a156d55a97dd6a3f403d604
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddOfferFields_QueryVariables = {||};
export type AddOfferFields_QueryResponse = {|
  +store: ?{|
    +company_names: ?$ReadOnlyArray<?string>
  |}
|};
export type AddOfferFields_Query = {|
  variables: AddOfferFields_QueryVariables,
  response: AddOfferFields_QueryResponse,
|};
*/


/*
query AddOfferFields_Query {
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
    "name": "AddOfferFields_Query",
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
    "name": "AddOfferFields_Query",
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
    "name": "AddOfferFields_Query",
    "id": null,
    "text": "query AddOfferFields_Query {\n  store {\n    company_names\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '605a7715e49ab752c2eb5ad9b1f5be72';
module.exports = node;
