/**
 * @flow
 * @relayHash 048d3bb9ca8682b661675df28fa0c55b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MajorTable_data$ref = any;
export type MajorsPage_QueryVariables = {||};
export type MajorsPage_QueryResponse = {|
  +store: ?{|
    +$fragmentRefs: MajorTable_data$ref
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
    ...MajorTable_data
    id
  }
}

fragment MajorTable_data on store {
  majors
  students {
    edges {
      id
      major
    }
  }
  offers {
    edges {
      id
      student_id
      wage_value
      wage_type
    }
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
            "name": "MajorTable_data",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "students",
            "storageKey": null,
            "args": null,
            "concreteType": "studentConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "student",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "major",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "offers",
            "storageKey": null,
            "args": null,
            "concreteType": "offerConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "offer",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "student_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "wage_value",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "wage_type",
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
    "name": "MajorsPage_Query",
    "id": null,
    "text": "query MajorsPage_Query {\n  store {\n    ...MajorTable_data\n    id\n  }\n}\n\nfragment MajorTable_data on store {\n  majors\n  students {\n    edges {\n      id\n      major\n    }\n  }\n  offers {\n    edges {\n      id\n      student_id\n      wage_value\n      wage_type\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9b56c8b17ef365655f62c38bfd53619';
module.exports = node;
