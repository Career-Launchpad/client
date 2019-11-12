/**
 * @flow
 * @relayHash d006782e1309a3cc130230e59bcad9ed
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteLinkInput = {|
  id: string
|};
export type Link_MutationVariables = {|
  input: DeleteLinkInput
|};
export type Link_MutationResponse = {|
  +deleteLink: ?{|
    +id: ?string,
    +title: string,
  |}
|};
export type Link_Mutation = {|
  variables: Link_MutationVariables,
  response: Link_MutationResponse,
|};
*/

/*
mutation Link_Mutation(
  $input: DeleteLinkInput!
) {
  deleteLink(input: $input) {
    id
    title
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "DeleteLinkInput!",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "deleteLink",
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
            name: "id",
            args: null,
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            name: "title",
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
      name: "Link_Mutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    operation: {
      kind: "Operation",
      name: "Link_Mutation",
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    params: {
      operationKind: "mutation",
      name: "Link_Mutation",
      id: null,
      text:
        "mutation Link_Mutation(\n  $input: DeleteLinkInput!\n) {\n  deleteLink(input: $input) {\n    id\n    title\n  }\n}\n",
      metadata: {}
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = '787b917c270eefc3fbeb8add3e689ec7';
module.exports = node;
