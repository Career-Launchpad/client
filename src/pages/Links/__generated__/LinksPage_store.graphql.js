/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ReaderFragment } from 'relay-runtime';
type LinkList_links$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LinksPage_store$ref: FragmentReference;
declare export opaque type LinksPage_store$fragmentType: LinksPage_store$ref;
export type LinksPage_store = {|
  +links: ?{|
    +$fragmentRefs: LinkList_links$ref
  |},
  +$refType: LinksPage_store$ref,
|};
export type LinksPage_store$data = LinksPage_store;
export type LinksPage_store$key = {
  +$data?: LinksPage_store$data,
  +$fragmentRefs: LinksPage_store$ref,
};
*/

const node /*: ReaderFragment*/ = {
  kind: "Fragment",
  name: "LinksPage_store",
  type: "Store",
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: "LinkedField",
      alias: null,
      name: "links",
      storageKey: null,
      args: null,
      concreteType: "LinkConnection",
      plural: false,
      selections: [
        {
          kind: "FragmentSpread",
          name: "LinkList_links",
          args: null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8e2f6778451497d5bbd077f944cdb845';
module.exports = node;
