/**
 * @flow
 * @relayHash c5d9b320be15cf39b3a186fb8ebbc5fa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddOfferSteps_CompanyStep_QueryVariables = {||};
export type AddOfferSteps_CompanyStep_QueryResponse = {|
  +store: ?{|
    +companies: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +name: ?string
      |}>
    |}
  |}
|};
export type AddOfferSteps_CompanyStep_Query = {|
  variables: AddOfferSteps_CompanyStep_QueryVariables,
  response: AddOfferSteps_CompanyStep_QueryResponse,
|};
*/


/*
query AddOfferSteps_CompanyStep_Query {
  store {
    companies {
      edges {
        name
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "companies",
  "storageKey": null,
  "args": null,
  "concreteType": "companyConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "company",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddOfferSteps_CompanyStep_Query",
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
    "name": "AddOfferSteps_CompanyStep_Query",
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
    "name": "AddOfferSteps_CompanyStep_Query",
    "id": null,
    "text": "query AddOfferSteps_CompanyStep_Query {\n  store {\n    companies {\n      edges {\n        name\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3352babc9a93b04565a02be23425b4ed';
module.exports = node;
