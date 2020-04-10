/**
 * @flow
 * @relayHash c45103b58d86cfa03664c49a70ec0a67
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OfferTable_offers$ref = any;
export type filter = {|
  field?: ?string,
  value?: ?string,
  comp?: ?string,
  parseValueAs?: ?string,
|};
export type OffersPage_QueryVariables = {|
  filters?: ?$ReadOnlyArray<?filter>
|};
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
query OffersPage_Query(
  $filters: [filter]
) {
  store {
    offers(filters: $filters) {
      ...OfferTable_offers
    }
    id
  }
}

fragment OfferTable_offers on offerConnection {
  edges {
    id
    position_type
    position_title
    location {
      state
    }
    company {
      name
    }
    academic_year
    wage_type
    wage_value
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filters",
    "type": "[filter]",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filters",
    "variableName": "filters"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OffersPage_Query",
    "type": "query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
            "args": (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
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
            "args": (v1/*: any*/),
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
                  (v2/*: any*/),
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "company",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "company",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      }
                    ]
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
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OffersPage_Query",
    "id": null,
    "text": "query OffersPage_Query(\n  $filters: [filter]\n) {\n  store {\n    offers(filters: $filters) {\n      ...OfferTable_offers\n    }\n    id\n  }\n}\n\nfragment OfferTable_offers on offerConnection {\n  edges {\n    id\n    position_type\n    position_title\n    location {\n      state\n    }\n    company {\n      name\n    }\n    academic_year\n    wage_type\n    wage_value\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2367c638bcd86b3cf837c9e53f2df561';
module.exports = node;
