/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Link_link$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LinkList_links$ref: FragmentReference;
declare export opaque type LinkList_links$fragmentType: LinkList_links$ref;
export type LinkList_links = {|
  +items: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: Link_link$ref,
  |}>,
  +$refType: LinkList_links$ref,
|};
export type LinkList_links$data = LinkList_links;
export type LinkList_links$key = {
  +$data?: LinkList_links$data,
  +$fragmentRefs: LinkList_links$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "LinkList_links",
  "type": "LinkConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "items",
      "storageKey": null,
      "args": null,
      "concreteType": "Link",
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
          "kind": "FragmentSpread",
          "name": "Link_link",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3c01f1d323c558d4e0b8f86e5adedea9';
module.exports = node;
