/**
 * @flow
 * @relayHash bb09880ef153e5e8461ff6d6a4bb503b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CompanyTable_companies$ref = any;
export type CompaniesPage_QueryVariables = {||};
export type CompaniesPage_QueryResponse = {|
  +store: ?{|
    +$fragmentRefs: CompanyTable_companies$ref
  |}
|};
export type CompaniesPage_Query = {|
  variables: CompaniesPage_QueryVariables,
  response: CompaniesPage_QueryResponse,
|};
*/


/*
query CompaniesPage_Query {
  store {
    ...CompanyTable_companies
    id
  }
}

fragment CompanyTable_companies on store {
  companies {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CompaniesPage_Query",
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
          {
            "kind": "FragmentSpread",
            "name": "CompanyTable_companies",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CompaniesPage_Query",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "companies",
            "storageKey": null,
            "args": null,
            "concreteType": "company",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CompaniesPage_Query",
    "id": null,
    "text": "query CompaniesPage_Query {\n  store {\n    ...CompanyTable_companies\n    id\n  }\n}\n\nfragment CompanyTable_companies on store {\n  companies {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a794b9251c21e73d457e9786d6b69cc1';
module.exports = node;
