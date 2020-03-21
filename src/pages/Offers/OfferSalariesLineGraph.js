import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ChartHelper from "../../components/ChartHelper";

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
  );
};

export default createFragmentContainer(OfferSalariesLineGraph, {
  offers: graphql`
    fragment OfferSalariesLineGraph_offers on offerConnection {
      edges {
        wage_value
        company {
            name
        }
      }
    }
  `
});
