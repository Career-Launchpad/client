/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OfferSalariesLineGraph_offers$ref: FragmentReference;
declare export opaque type OfferSalariesLineGraph_offers$fragmentType: OfferSalariesLineGraph_offers$ref;
export type OfferSalariesLineGraph_offers = {|
  +edges: ?$ReadOnlyArray<?{|
    +wage_value: ?number,
    +company: ?{|
      +name: ?string
    |},
  |}>,
  +$refType: OfferSalariesLineGraph_offers$ref,
|};
export type OfferSalariesLineGraph_offers$data = OfferSalariesLineGraph_offers;
export type OfferSalariesLineGraph_offers$key = {
  +$data?: OfferSalariesLineGraph_offers$data,
  +$fragmentRefs: OfferSalariesLineGraph_offers$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "OfferSalariesLineGraph_offers",
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
          "name": "wage_value",
          "args": null,
          "storageKey": null
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ed1c5e4a04fa11cfc8e702fed1fa49a5';
module.exports = node;
