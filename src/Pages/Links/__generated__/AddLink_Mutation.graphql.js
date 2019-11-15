/**
 * @flow
 * @relayHash b16a60e1944c03edbc83aef96fc48c34
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateLinkInput = {|
  title: string,
  url: string,
|};
export type AddLink_MutationVariables = {|
  input: CreateLinkInput
|};
export type AddLink_MutationResponse = {|
  +createLink: ?{|
    +title: string,
    +url: string,
  |}
|};
export type AddLink_Mutation = {|
  variables: AddLink_MutationVariables,
  response: AddLink_MutationResponse,
|};
*/

/*
mutation AddLink_Mutation(
  $input: CreateLinkInput!
) {
  createLink(input: $input) {
    title
    url
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "CreateLinkInput!",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "createLink",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input"
          }
        ],
        concreteType: "Link",
        plural: false,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            name: "title",
            args: null,
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            name: "url",
            args: null,
            storageKey: null
          }
        ]
      }
    ];
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "AddLink_Mutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    operation: {
      kind: "Operation",
      name: "AddLink_Mutation",
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    params: {
      operationKind: "mutation",
      name: "AddLink_Mutation",
      id: null,
      text:
        "mutation AddLink_Mutation(\n  $input: CreateLinkInput!\n) {\n  createLink(input: $input) {\n    title\n    url\n  }\n}\n",
      metadata: {}
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = '1b94f61d848b7e00580e1d0f3081c2e8';
module.exports = node;
