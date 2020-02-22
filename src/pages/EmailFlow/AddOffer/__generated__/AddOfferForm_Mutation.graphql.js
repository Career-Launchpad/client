/**
 * @flow
 * @relayHash 50c4daefefb55d30375562aaccd54d9a
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
    +id: ?string
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
    "text": "mutation AddOfferForm_Mutation(\n  $input: createOfferInput!\n) {\n  offer(offer: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1ad59062e124a4e7a48cdedcf1870f25';
module.exports = node;
