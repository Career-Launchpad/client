/**
 * @flow
 * @relayHash 98717f99771db0b8ce75170e024ed64b
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LinksPage_store$ref = any;
export type App_Links_QueryVariables = {||};
export type App_Links_QueryResponse = {|
  +store: ?{|
    +$fragmentRefs: LinksPage_store$ref
  |}
|};
export type App_Links_Query = {|
  variables: App_Links_QueryVariables,
  response: App_Links_QueryResponse,
|};
*/

/*
query App_Links_Query {
  store {
    ...LinksPage_store
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

fragment LinksPage_store on Store {
  links {
    ...LinkList_links
  }
}
*/

const node /*: ConcreteRequest*/ = {
  kind: "Request",
  fragment: {
    kind: "Fragment",
    name: "App_Links_Query",
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
            kind: "FragmentSpread",
            name: "LinksPage_store",
            args: null
          }
        ]
      }
    ]
  },
  operation: {
    kind: "Operation",
    name: "App_Links_Query",
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
    name: "App_Links_Query",
    id: null,
    text:
      "query App_Links_Query {\n  store {\n    ...LinksPage_store\n  }\n}\n\nfragment LinkList_links on LinkConnection {\n  items {\n    id\n    ...Link_link\n  }\n}\n\nfragment Link_link on Link {\n  id\n  title\n  url\n}\n\nfragment LinksPage_store on Store {\n  links {\n    ...LinkList_links\n  }\n}\n",
    metadata: {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '6434d664783ad475d27b6f387d77d204';
module.exports = node;
