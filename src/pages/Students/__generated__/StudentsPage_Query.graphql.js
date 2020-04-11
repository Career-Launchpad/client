/**
 * @flow
 * @relayHash e85ecadb708e5417c294d88ce4591221
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StudentTable_students$ref = any;
export type filter = {|
  field?: ?string,
  value?: ?string,
  comp?: ?string,
  parseValueAs?: ?string,
|};
export type StudentsPage_QueryVariables = {|
  filters?: ?$ReadOnlyArray<?filter>
|};
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
query StudentsPage_Query(
  $filters: [filter]
) {
  store {
    students(filters: $filters) {
      ...StudentTable_students
    }
    id
  }
}

fragment OfferTable_offers on offerConnection {
  edges {
    id
    position_type
    position_title
    location {
      state
    }
    company {
      name
    }
    academic_year
    wage_type
    wage_value
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
      ...OfferTable_offers
      edges {
        accepted
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filters",
    "type": "[filter]",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filters",
    "variableName": "filters"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "academic_year",
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
    "argumentDefinitions": (v0/*: any*/),
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
            "args": (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
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
            "args": (v1/*: any*/),
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
                  (v2/*: any*/),
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
                  (v3/*: any*/),
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
                          (v2/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "position_type",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "position_title",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "location",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "location",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "state",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "company",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "company",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "name",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          (v3/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "wage_type",
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
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "StudentsPage_Query",
    "id": null,
    "text": "query StudentsPage_Query(\n  $filters: [filter]\n) {\n  store {\n    students(filters: $filters) {\n      ...StudentTable_students\n    }\n    id\n  }\n}\n\nfragment OfferTable_offers on offerConnection {\n  edges {\n    id\n    position_type\n    position_title\n    location {\n      state\n    }\n    company {\n      name\n    }\n    academic_year\n    wage_type\n    wage_value\n  }\n}\n\nfragment StudentTable_students on studentConnection {\n  edges {\n    id\n    firstname\n    lastname\n    academic_year\n    major\n    offers {\n      ...OfferTable_offers\n      edges {\n        accepted\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bc49046d2eba9cb9288d38e77b4a1390';
module.exports = node;
