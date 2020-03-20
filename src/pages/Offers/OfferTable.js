import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";
import { DataTable, DataTableRow } from "../../components/DataTable";

export const columns = [
  { name: "Position", id: "position_title", type: "number" },
  { name: "Company Name", id: "company.name", type: "string" },
  {
    name: "Type",
    id: "position_type",
    type: ["Full-time", "Part-time", "Internship", "Contractor"]
  },
  {
    name: "Compensation Type",
    id: "wage_type",
    type: ["Salary", "Hourly", "On-completion"]
  },
  { name: "Compensation Value", id: "wage_value", type: "number" }
];

const OfferTable = ({ offers }) => {
  return (
    <DataTable headers={columns}>
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
