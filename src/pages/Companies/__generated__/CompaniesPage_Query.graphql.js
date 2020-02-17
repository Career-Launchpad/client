/**
 * @flow
 * @relayHash b38dd1466a6ea6542c12c3bc8deda7c3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CompanyTable_Companies$ref = any;
export type CompaniesPage_QueryVariables = {||};
export type CompaniesPage_QueryResponse = {|
  +store: ?{|
    +companies: ?$ReadOnlyArray<?{|
      +$fragmentRefs: CompanyTable_Companies$ref
    |}>
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
      ...CompanyTable_Companies
    }
    id
  }
}

fragment CompanyTable_Companies on company {
  id
  name
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
            "concreteType": "company",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CompanyTable_Companies",
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
    "text": "query CompaniesPage_Query {\n  store {\n    companies {\n      ...CompanyTable_Companies\n    }\n    id\n  }\n}\n\nfragment CompanyTable_Companies on company {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6b5d4db258ecd802e9342f7eec4fa31f';
module.exports = node;
