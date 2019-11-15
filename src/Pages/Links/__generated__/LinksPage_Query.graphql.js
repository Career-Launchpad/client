/**
 * @flow
 * @relayHash a43a75004ba679c8acbb055fcddc6cc4
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LinkList_links$ref = any;
export type LinksPage_QueryVariables = {||};
export type LinksPage_QueryResponse = {|
  +store: ?{|
    +links: ?{|
      +$fragmentRefs: LinkList_links$ref
    |}
  |}
|};
export type LinksPage_Query = {|
  variables: LinksPage_QueryVariables,
  response: LinksPage_QueryResponse,
|};
*/

/*
query LinksPage_Query {
  store {
    links {
      ...LinkList_links
    }
  }
}

fragment LinkList_links on LinkConnection {
  items {
    id
    ...Link_link
  }
}

fragment Link_link on Link {
  id
  title
  url
}
*/

const node /*: ConcreteRequest*/ = {
  kind: "Request",
  fragment: {
    kind: "Fragment",
    name: "LinksPage_Query",
    type: "Query",
    metadata: null,
    argumentDefinitions: [],
    selections: [
      {
        kind: "LinkedField",
        alias: null,
        name: "store",
        storageKey: null,
        args: null,
        concreteType: "Store",
        plural: false,
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
      }
    ]
  },
  operation: {
    kind: "Operation",
    name: "LinksPage_Query",
    argumentDefinitions: [],
    selections: [
      {
        kind: "LinkedField",
        alias: null,
        name: "store",
        storageKey: null,
        args: null,
        concreteType: "Store",
        plural: false,
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
                kind: "LinkedField",
                alias: null,
                name: "items",
                storageKey: null,
                args: null,
                concreteType: "Link",
                plural: true,
                selections: [
                  {
                    kind: "ScalarField",
                    alias: null,
                    name: "id",
                    args: null,
                    storageKey: null
                  },
                  {
                    kind: "ScalarField",
                    alias: null,
                    name: "title",
                    args: null,
                    storageKey: null
                  },
                  {
                    kind: "ScalarField",
                    alias: null,
                    name: "url",
                    args: null,
                    storageKey: null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  params: {
    operationKind: "query",
    name: "LinksPage_Query",
    id: null,
    text:
      "query LinksPage_Query {\n  store {\n    links {\n      ...LinkList_links\n    }\n  }\n}\n\nfragment LinkList_links on LinkConnection {\n  items {\n    id\n    ...Link_link\n  }\n}\n\nfragment Link_link on Link {\n  id\n  title\n  url\n}\n",
    metadata: {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '9b6f76a46b8dd7ada0b328be8c053381';
module.exports = node;
