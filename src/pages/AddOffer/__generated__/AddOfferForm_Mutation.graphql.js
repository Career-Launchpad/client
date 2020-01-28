/**
 * @flow
 * @relayHash dd51b28351008a654fdb6015278f20de
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createOfferInput = {|
  student_id?: ?string,
  position_type?: ?string,
  position_title?: ?string,
  benefits_description?: ?string,
  accepted?: ?boolean,
  extended?: ?string,
  deadline?: ?string,
  company_name?: ?string,
  location?: ?locationInput,
  wage_value?: ?number,
  wage_type?: ?string,
  bonuses?: ?$ReadOnlyArray<?bonusInput>,
|};
export type locationInput = {|
  city?: ?string,
  state?: ?string,
  country?: ?string,
|};
export type bonusInput = {|
  value?: ?number,
  type?: ?string,
  repeat_interval?: ?string,
  repeat_count?: ?number,
  one_time?: ?boolean,
  description?: ?string,
|};
export type AddOfferForm_MutationVariables = {|
  input: createOfferInput
|};
export type AddOfferForm_MutationResponse = {|
  +offer: ?{|
    +id: ?string,
    +position_type: ?string,
    +position_title: ?string,
    +wage_value: ?number,
    +wage_type: ?string,
    +location: ?{|
      +city: ?string,
      +state: ?string,
      +country: ?string,
    |},
  |}
|};
export type AddOfferForm_Mutation = {|
  variables: AddOfferForm_MutationVariables,
  response: AddOfferForm_MutationResponse,
|};
*/


/*
mutation AddOfferForm_Mutation(
  $input: createOfferInput!
) {
  offer(offer: $input) {
    id
    position_type
    position_title
    wage_value
    wage_type
    location {
      city
      state
      country
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createOfferInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "offer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "offer",
        "variableName": "input"
      }
    ],
    "concreteType": "offer",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
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
            "name": "city",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "state",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "country",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddOfferForm_Mutation",
    "type": "mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddOfferForm_Mutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddOfferForm_Mutation",
    "id": null,
    "text": "mutation AddOfferForm_Mutation(\n  $input: createOfferInput!\n) {\n  offer(offer: $input) {\n    id\n    position_type\n    position_title\n    wage_value\n    wage_type\n    location {\n      city\n      state\n      country\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8ce3c260772be4549dab28230f66dd13';
module.exports = node;
