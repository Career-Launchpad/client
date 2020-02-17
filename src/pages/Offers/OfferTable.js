

import React from 'react'
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";
import { DataTable, DataTableRow } from "../../components/DataTable";

const headers = [
  { name: "Position", id: "position_title" },
  { name: "Company Name", id: "company.name" },
  { name: "Type", id: "position_type" },
  { name: "Compensation Type", id: "wage_type" },
  { name: "Compensation Value", id: "wage_value" }
];

const OfferTable = ({ offers }) => {
  return (
    <DataTable headers={headers}>
      {offers.edges.map((offer, i) => {
        return (
          <DataTableRow key={offer.id || i} data={offer}>
            <TableRow>
              <TableCell>{offer.position_title}</TableCell>
              <TableCell>{offer.company.name}</TableCell>
              <TableCell>{offer.position_type}</TableCell>
              <TableCell>{offer.wage_type}</TableCell>
              <TableCell>
                <NumberFormat
                  value={offer.wage_value}
                  displayType="text"
                  thousandSeparator
                  prefix="$"
                />
              </TableCell>
            </TableRow>
          </DataTableRow>
        );
      })}
    </DataTable>
  );
};

export default createFragmentContainer(OfferTable, {
  offers: graphql`
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
  `
});
