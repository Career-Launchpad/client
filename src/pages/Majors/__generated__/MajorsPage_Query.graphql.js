/**
 * @flow
 * @relayHash 12c804d9bb8f7188097baae777738541
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MajorTable_majors$ref = any;
export type MajorsPage_QueryVariables = {||};
export type MajorsPage_QueryResponse = {|
  +store: ?{|
    +$fragmentRefs: MajorTable_majors$ref
  |}
|};
export type MajorsPage_Query = {|
  variables: MajorsPage_QueryVariables,
  response: MajorsPage_QueryResponse,
|};
*/


/*
query MajorsPage_Query {
  store {
    ...MajorTable_majors
    id
  }
}

fragment MajorTable_majors on store {
  majors
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MajorsPage_Query",
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
            "name": "MajorTable_majors",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MajorsPage_Query",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "majors",
            "args": null,
            "storageKey": null
          },
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
    "name": "MajorsPage_Query",
    "id": null,
    "text": "query MajorsPage_Query {\n  store {\n    ...MajorTable_majors\n    id\n  }\n}\n\nfragment MajorTable_majors on store {\n  majors\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '8b423aae85c0f9fdcaa91c7e603a33ee';
module.exports = node;
