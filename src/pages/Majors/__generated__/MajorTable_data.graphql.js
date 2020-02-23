/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MajorTable_data$ref: FragmentReference;
declare export opaque type MajorTable_data$fragmentType: MajorTable_data$ref;
export type MajorTable_data = {|
  +majors: ?$ReadOnlyArray<?string>,
  +students: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +id: ?string,
      +major: ?string,
    |}>
  |},
  +$refType: MajorTable_data$ref,
|};
export type MajorTable_data$data = MajorTable_data;
export type MajorTable_data$key = {
  +$data?: MajorTable_data$data,
  +$fragmentRefs: MajorTable_data$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MajorTable_data",
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "students",
      "storageKey": null,
      "args": null,
      "concreteType": "studentConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "student",
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
              "name": "major",
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
(node/*: any*/).hash = 'e403c1076877e521f72ae326bb72df26';
module.exports = node;
