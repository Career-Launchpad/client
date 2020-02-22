/**
 * @flow
 * @relayHash 5a08a8cbb7323c6a5aee3546c9276707
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createStudentInput = {|
  id?: ?string,
  email?: ?string,
  firstname?: ?string,
  lastname?: ?string,
  college_name?: ?string,
  academic_year?: ?string,
  major?: ?string,
  gender?: ?string,
  ethnicity?: ?string,
  last_authentication?: ?string,
|};
export type AddStudentForm_MutationVariables = {|
  input: createStudentInput
|};
export type AddStudentForm_MutationResponse = {|
  +student: ?{|
    +id: ?string
  |}
|};
export type AddStudentForm_Mutation = {|
  variables: AddStudentForm_MutationVariables,
  response: AddStudentForm_MutationResponse,
|};
*/


/*
mutation AddStudentForm_Mutation(
  $input: createStudentInput!
) {
  student(student: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createStudentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "student",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "student",
        "variableName": "input"
      }
    ],
    "concreteType": "student",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddStudentForm_Mutation",
    "type": "mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddStudentForm_Mutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddStudentForm_Mutation",
    "id": null,
    "text": "mutation AddStudentForm_Mutation(\n  $input: createStudentInput!\n) {\n  student(student: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4983015809ef15332f6a68f53255b79b';
module.exports = node;
