/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CompanyTable_companies$ref: FragmentReference;
declare export opaque type CompanyTable_companies$fragmentType: CompanyTable_companies$ref;
export type CompanyTable_companies = {|
  +edges: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
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


const node/*: ReaderFragment*/ = {
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
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b0d98ee7be4b0009b8b160eea212037a';
module.exports = node;
