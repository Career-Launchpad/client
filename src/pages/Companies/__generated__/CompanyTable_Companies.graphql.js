/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CompanyTable_Companies$ref: FragmentReference;
declare export opaque type CompanyTable_Companies$fragmentType: CompanyTable_Companies$ref;
export type CompanyTable_Companies = {|
  +id: ?string,
  +name: ?string,
  +$refType: CompanyTable_Companies$ref,
|};
export type CompanyTable_Companies$data = CompanyTable_Companies;
export type CompanyTable_Companies$key = {
  +$data?: CompanyTable_Companies$data,
  +$fragmentRefs: CompanyTable_Companies$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CompanyTable_Companies",
  "type": "company",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = 'a4cbe6b64249bb7cf0b18aa1f5239cef';
module.exports = node;
