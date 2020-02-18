import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTable, DataTableRow } from "../../components/DataTable";

const headers = [{ name: "Name", id: "name" }];

const CompanyTable = ({ companies: { companies } }) => {
  return (
    <DataTable headers={headers}>
      {companies.map((Company, i) => {
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

export default createFragmentContainer(CompanyTable, {
  companies: graphql`
    fragment CompanyTable_companies on store {
      companies {
        id
        name
      }
    }
  `
});
