/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OfferTable_offers$ref: FragmentReference;
declare export opaque type OfferTable_offers$fragmentType: OfferTable_offers$ref;
export type OfferTable_offers = {|
  +edges: ?$ReadOnlyArray<?{|
    +id: ?string,
    +position_type: ?string,
    +position_title: ?string,
    +location: ?{|
      +state: ?string
    |},
    +company_name: ?string,
    +academic_year: ?string,
    +wage_type: ?string,
    +wage_value: ?number,
  |}>,
  +$refType: OfferTable_offers$ref,
|};
export type OfferTable_offers$data = OfferTable_offers;
export type OfferTable_offers$key = {
  +$data?: OfferTable_offers$data,
  +$fragmentRefs: OfferTable_offers$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "OfferTable_offers",
  "type": "offerConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
          "kind": "ScalarField",
          "alias": null,
          "name": "company_name",
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ea87abcbd71e88c676896a08b97bdd1e';
module.exports = node;
