import React, { Component } from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ChartHelper from "../ChartHelper";

const OffersPerCompanyBarGraph = ({ offers }) => {
    let data = {};
    const companyOffers = offers.edges.map(o => o.company.name);
    for(let i in companyOffers) {
        if (data[companyOffers[i]]) { data[companyOffers[i]] += 1; } 
        else { data[companyOffers[i]] = 1; }
    }
    return (
        <ChartHelper
            data={Object.values(data)}
            labels={Object.keys(data)}
            title={"Student Offers Per Company"}
            pointLabel={"Number of Student Offers"}
            type={"bar"}
        />
    )
}

export default createFragmentContainer(OffersPerCompanyBarGraph, {
    offers: graphql`
        fragment OfferTable_offers on offerConnection {
            edges {
                wage_value
                company_name
            }
        }
    `
  });
