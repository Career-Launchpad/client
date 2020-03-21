/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OffersPerCompanyBarGraph_offers$ref: FragmentReference;
declare export opaque type OffersPerCompanyBarGraph_offers$fragmentType: OffersPerCompanyBarGraph_offers$ref;
export type OffersPerCompanyBarGraph_offers = {|
  +edges: ?$ReadOnlyArray<?{|
    +wage_value: ?number,
    +company: ?{|
      +name: ?string
    |},
  |}>,
  +$refType: OffersPerCompanyBarGraph_offers$ref,
|};
export type OffersPerCompanyBarGraph_offers$data = OffersPerCompanyBarGraph_offers;
export type OffersPerCompanyBarGraph_offers$key = {
  +$data?: OffersPerCompanyBarGraph_offers$data,
  +$fragmentRefs: OffersPerCompanyBarGraph_offers$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "OffersPerCompanyBarGraph_offers",
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
(node/*: any*/).hash = '282244b4cffe0921130a99cc1000c4e1';
module.exports = node;
