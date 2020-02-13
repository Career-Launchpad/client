/**
 * @flow
 * @relayHash 4783f04ec2ed34c744825b2448ceec93
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OfferTable_offers$ref = any;
export type OffersPage_QueryVariables = {||};
export type OffersPage_QueryResponse = {|
  +store: ?{|
    +offers: ?{|
      +$fragmentRefs: OfferTable_offers$ref
    |}
  |}
|};
export type OffersPage_Query = {|
  variables: OffersPage_QueryVariables,
  response: OffersPage_QueryResponse,
|};
*/


/*
query OffersPage_Query {
  store {
    offers {
      ...OfferTable_offers
    }
    id
  }
}

fragment OfferTable_offers on offerConnection {
  edges {
    offer_id
    position_type
    position_title
    location {
      state
    }
    company_id
    academic_year
    wage_type
    wage_value
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OffersPage_Query",
    "type": "query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "store",
        "plural": false,
        "selections": [
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
  },
  "operation": {
    "kind": "Operation",
    "name": "OffersPage_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "store",
        "plural": false,
        "selections": [
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "offer_id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "position_type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "position_title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "location",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "state",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "company_id",
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
                    "name": "wage_type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "wage_value",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OffersPage_Query",
    "id": null,
    "text": "query OffersPage_Query {\n  store {\n    offers {\n      ...OfferTable_offers\n    }\n    id\n  }\n}\n\nfragment OfferTable_offers on offerConnection {\n  edges {\n    offer_id\n    position_type\n    position_title\n    location {\n      state\n    }\n    company_id\n    academic_year\n    wage_type\n    wage_value\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '7e3df4547801652a7bb09432d233237d';
module.exports = node;
