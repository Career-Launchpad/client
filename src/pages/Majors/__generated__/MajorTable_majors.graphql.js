/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MajorTable_majors$ref: FragmentReference;
declare export opaque type MajorTable_majors$fragmentType: MajorTable_majors$ref;
export type MajorTable_majors = {|
  +majors: ?$ReadOnlyArray<?string>,
  +$refType: MajorTable_majors$ref,
|};
export type MajorTable_majors$data = MajorTable_majors;
export type MajorTable_majors$key = {
  +$data?: MajorTable_majors$data,
  +$fragmentRefs: MajorTable_majors$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MajorTable_majors",
  "type": "store",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "majors",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '548868d0a23b195c108cd7c6b984d0df';
module.exports = node;
