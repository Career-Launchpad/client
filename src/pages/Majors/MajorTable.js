import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTable, DataTableRow } from "../../components/DataTable";

const headers = [
  { name: "Name", id: "name" },
  { name: "Number of Students", id: "nStudents"}
];

const MajorTable = ({data: {majors, students}}) => {
  return (
    <DataTable headers={headers}>
      {majors.map((major, i) => {
        return (
          <DataTableRow key={i}>
            <TableRow>
              <TableCell>{major}</TableCell>
              <TableCell>{students.edges.filter((student) => student.major === major).length}</TableCell>
            </TableRow>
          </DataTableRow>
        );
      })}
    </DataTable>
  );
};

export default createFragmentContainer(MajorTable, {
  data: graphql`
    fragment MajorTable_data on store {
      majors
      students {
        edges {
          id
          major
        }
      }
    }
  `
});
