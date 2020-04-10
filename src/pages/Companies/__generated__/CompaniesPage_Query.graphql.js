/**
 * @flow
 * @relayHash c6b9be7fc75027da0872fb8a39844c40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CompanyTable_companies$ref = any;
export type CompaniesPage_QueryVariables = {||};
export type CompaniesPage_QueryResponse = {|
  +store: ?{|
    +companies: ?{|
      +$fragmentRefs: CompanyTable_companies$ref
    |}
  |}
|};
export type CompaniesPage_Query = {|
  variables: CompaniesPage_QueryVariables,
  response: CompaniesPage_QueryResponse,
|};
*/


/*
query CompaniesPage_Query {
  store {
    companies {
      ...CompanyTable_companies
    }
    id
  }
}

fragment CompanyTable_companies on companyConnection {
  edges {
    id
    name
    offers {
      ...OfferTable_offers
      edges {
        id
        position_title
        accepted
        timestamp
      }
    }
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CompaniesPage_Query",
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
            "name": "companies",
            "storageKey": null,
            "args": null,
            "concreteType": "companyConnection",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CompanyTable_companies",
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
    "name": "CompaniesPage_Query",
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
            "name": "companies",
            "storageKey": null,
            "args": null,
            "concreteType": "companyConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "company",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
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
                          (v0/*: any*/),
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
                              (v1/*: any*/)
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
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "accepted",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "timestamp",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CompaniesPage_Query",
    "id": null,
    "text": "query CompaniesPage_Query {\n  store {\n    companies {\n      ...CompanyTable_companies\n    }\n    id\n  }\n}\n\nfragment CompanyTable_companies on companyConnection {\n  edges {\n    id\n    name\n    offers {\n      ...OfferTable_offers\n      edges {\n        id\n        position_title\n        accepted\n        timestamp\n      }\n    }\n  }\n}\n\nfragment OfferTable_offers on offerConnection {\n  edges {\n    id\n    position_type\n    position_title\n    location {\n      state\n    }\n    company {\n      name\n    }\n    academic_year\n    wage_type\n    wage_value\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f348111e2ee8b57b4634581cd8b503ea';
module.exports = node;
