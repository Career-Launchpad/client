/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type OfferTable_offers$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StudentTable_students$ref: FragmentReference;
declare export opaque type StudentTable_students$fragmentType: StudentTable_students$ref;
export type StudentTable_students = {|
  +edges: ?$ReadOnlyArray<?{|
    +id: ?string,
    +firstname: ?string,
    +lastname: ?string,
    +academic_year: ?string,
    +major: ?string,
    +offers: ?{|
      +$fragmentRefs: OfferTable_offers$ref
    |},
  |}>,
  +$refType: StudentTable_students$ref,
|};
export type StudentTable_students$data = StudentTable_students;
export type StudentTable_students$key = {
  +$data?: StudentTable_students$data,
  +$fragmentRefs: StudentTable_students$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "StudentTable_students",
  "type": "studentConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
          "name": "firstname",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lastname",
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
          "name": "major",
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
// prettier-ignore
(node/*: any*/).hash = 'ec6d968908ea4fd9512d69c6bf61b9ad';
module.exports = node;
