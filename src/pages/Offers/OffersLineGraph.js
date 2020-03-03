import React, { Component } from "react";
import { createFragmentContainer } from "react-relay";
import Chart from "chart.js";
import graphql from "babel-plugin-relay/macro";
import LineGraph from "../LineGraph";

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

const OffersLineGraph = ({ offers }) => {
    console.log(offers.edges);
    const data = offers.edges.map(o => o.wage_value);
    const labels = offers.edges.map(o => o.company.name);
    console.log(labels);
    return (
        <LineGraph
            data={data}
            labels={labels}
        />
    )
}

export default createFragmentContainer(OffersLineGraph, {
    offers: graphql`
        fragment OfferTable_offers on offerConnection {
            edges {
                wage_value
                company_name
            }
        }
    `
  });
