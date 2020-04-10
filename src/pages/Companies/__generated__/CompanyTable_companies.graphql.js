/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type OfferTable_offers$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CompanyTable_companies$ref: FragmentReference;
declare export opaque type CompanyTable_companies$fragmentType: CompanyTable_companies$ref;
export type CompanyTable_companies = {|
  +edges: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +offers: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +id: ?string,
        +position_title: ?string,
        +accepted: ?boolean,
        +timestamp: ?string,
      |}>,
      +$fragmentRefs: OfferTable_offers$ref,
    |},
  |}>,
  +$refType: CompanyTable_companies$ref,
|};
export type CompanyTable_companies$data = CompanyTable_companies;
export type CompanyTable_companies$key = {
  +$data?: CompanyTable_companies$data,
  +$fragmentRefs: CompanyTable_companies$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CompanyTable_companies",
  "type": "companyConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "company",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
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
                (v0/*: any*/),
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
                  "name": "accepted",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "timestamp",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "FragmentSpread",
              "name": "OfferTable_offers",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '52737eb20659572c00537849a04df31c';
module.exports = node;
