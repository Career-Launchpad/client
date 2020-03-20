import React, { Component } from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ChartHelper from "../ChartHelper";

//--Chart Style Options--//
// Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
// Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

const OfferSalariesLineGraph = ({ offers }) => {
    console.log(offers.edges);
    const data = offers.edges.map(o => o.wage_value);
    const labels = offers.edges.map(o => o.company.name);
    console.log(labels);
    return (
        <ChartHelper
            data={data}
            labels={labels}
            pointLabel={"Average Salary"}
            title={"Salaries by Company"}
            type={"line"}
        />
    )
}

export default createFragmentContainer(OfferSalariesLineGraph, {
    offers: graphql`
        fragment OfferTable_offers on offerConnection {
            edges {
                wage_value
                company_name
            }
        }
    `
  });
