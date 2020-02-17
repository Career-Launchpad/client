import React from "react";
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

const CompanyTable = ({ Companys }) => {
  return (
    <DataTable headers={headers}>
      {Companys.edges.map((Company, i) => {
        return (
          <DataTableRow key={Company.id || i} data={Company}>
            <TableRow>
              <TableCell>{Company.position_title}</TableCell>
              <TableCell>{Company.company.name}</TableCell>
              <TableCell>{Company.position_type}</TableCell>
              <TableCell>{Company.wage_type}</TableCell>
              <TableCell>
                <NumberFormat
                  value={Company.wage_value}
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

export default createFragmentContainer(CompanyTable, {
  Companies: graphql`
    fragment CompanyTable_Companies on company {
      id
      name
    }
  `
});
