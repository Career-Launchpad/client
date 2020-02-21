/**
 * @flow
 * @relayHash 3d61fd3256308fbceb47c51bc85d0ad7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CompanyTable_companies$ref = any;
export type CompaniesPage_QueryVariables = {||};
export type CompaniesPage_QueryResponse = {|
  +store: ?{|
    +companies: ?{|
      +$fragmentRefs: CompanyTable_companies$ref
    |}
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
    companies {
      ...CompanyTable_companies
    }
    id
  }
}

fragment CompanyTable_companies on companyConnection {
  edges {
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
            "kind": "LinkedField",
            "alias": null,
            "name": "companies",
            "storageKey": null,
            "args": null,
            "concreteType": "companyConnection",
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
                  (v0/*: any*/),
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
    "text": "query CompaniesPage_Query {\n  store {\n    companies {\n      ...CompanyTable_companies\n    }\n    id\n  }\n}\n\nfragment CompanyTable_companies on companyConnection {\n  edges {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f348111e2ee8b57b4634581cd8b503ea';
module.exports = node;
