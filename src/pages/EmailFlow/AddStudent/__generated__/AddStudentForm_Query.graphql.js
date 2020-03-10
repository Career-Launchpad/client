/**
 * @flow
 * @relayHash 8dc29139058fb6097a74945f455fda4e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddStudentForm_QueryVariables = {|
  student_id?: ?string
|};
export type AddStudentForm_QueryResponse = {|
  +store: ?{|
    +student: ?{|
      +id: ?string,
      +firstname: ?string,
      +lastname: ?string,
      +major: ?string,
      +academic_year: ?string,
      +gender: ?string,
      +ethnicity: ?string,
    |}
  |}
|};
export type AddStudentForm_Query = {|
  variables: AddStudentForm_QueryVariables,
  response: AddStudentForm_QueryResponse,
|};
*/


/*
query AddStudentForm_Query(
  $student_id: String
) {
  store {
    student(id: $student_id) {
      id
      firstname
      lastname
      major
      academic_year
      gender
      ethnicity
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "student_id",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "student",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "student_id"
    }
  ],
  "concreteType": "student",
  "plural": false,
  "selections": [
    (v1/*: any*/),
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
      "name": "major",
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
      "name": "gender",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "ethnicity",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddStudentForm_Query",
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
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddStudentForm_Query",
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
          (v2/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AddStudentForm_Query",
    "id": null,
    "text": "query AddStudentForm_Query(\n  $student_id: String\n) {\n  store {\n    student(id: $student_id) {\n      id\n      firstname\n      lastname\n      major\n      academic_year\n      gender\n      ethnicity\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'badb15c10cb6ad555a89b7f12d75042c';
module.exports = node;
