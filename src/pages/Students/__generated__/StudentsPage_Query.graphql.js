/**
 * @flow
 * @relayHash da602e474a1de550b255dda0a7253606
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StudentTable_students$ref = any;
export type StudentsPage_QueryVariables = {||};
export type StudentsPage_QueryResponse = {|
  +store: ?{|
    +students: ?{|
      +$fragmentRefs: StudentTable_students$ref
    |}
  |}
|};
export type StudentsPage_Query = {|
  variables: StudentsPage_QueryVariables,
  response: StudentsPage_QueryResponse,
|};
*/


/*
query StudentsPage_Query {
  store {
    students {
      ...StudentTable_students
    }
    id
  }
}

fragment StudentTable_students on studentConnection {
  edges {
    id
    firstname
    lastname
    academic_year
    major
    offers {
      edges {
        accepted
      }
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
    "name": "StudentsPage_Query",
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
            "name": "students",
            "storageKey": null,
            "args": null,
            "concreteType": "studentConnection",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "StudentTable_students",
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
    "name": "StudentsPage_Query",
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
                    "name": "firstname",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "lastname",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "academic_year",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "major",
                    "args": null,
                    "storageKey": null
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "accepted",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
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
    "name": "StudentsPage_Query",
    "id": null,
    "text": "query StudentsPage_Query {\n  store {\n    students {\n      ...StudentTable_students\n    }\n    id\n  }\n}\n\nfragment StudentTable_students on studentConnection {\n  edges {\n    id\n    firstname\n    lastname\n    academic_year\n    major\n    offers {\n      edges {\n        accepted\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6cf62a8ddff876ae24da2e7e73ab852d';
module.exports = node;
