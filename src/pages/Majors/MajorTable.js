import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTable, DataTableRow } from "../../components/DataTable";

const headers = [{ name: "Name", id: "name" }];

const MajorTable = ({ majors: { majors } }) => {
  return (
    <DataTable headers={headers}>
      {majors.map((major, i) => {
        return (
          <DataTableRow key={i}>
            <TableRow>
              <TableCell>{major}</TableCell>
            </TableRow>
          </DataTableRow>
        );
      })}
    </DataTable>
  );
};

export default createFragmentContainer(MajorTable, {
  majors: graphql`
    fragment MajorTable_majors on store {
      majors
    }
  `
});
