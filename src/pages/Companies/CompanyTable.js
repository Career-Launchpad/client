import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import NumberFormat from "react-number-format";
import { DataTable, DataTableRow } from "../../components/DataTable";

const headers = [
  { name: "Name", id: "name" },
];

const CompanyTable = ({ Companies }) => {
  console.log(Companies);
  return (
    <DataTable headers={headers}>
      {Companies.map((Company, i) => {
        return (
          <DataTableRow key={Company.id || i} data={Company}>
            <TableRow>
              <TableCell>{Company.name}</TableCell>
            </TableRow>
          </DataTableRow>
        );
      })}
    </DataTable>
  );
};

// export default createFragmentContainer(CompanyTable, {
//   Companies: graphql`
//     fragment CompanyTable_Companies on company {
//       name
//     }
//   `
// });

export default CompanyTable;