import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTable, DataTableRow } from "../../components/DataTable";
import NumberFormat from "react-number-format";

const headers = [
  { name: "Name", id: "name" },
  { name: "Number of Students", id: "nStudents"},
  { name: "Avg. Offer Compensation", id: "avgCompensation"},
];

const getAvgWageForMajor = (offers, students, major) => {
  let n_students = students.edges.filter((student) => student.major === major).length
  
  let total_wage = offers.edges.reduce((total, offer) => {
    let student = students.edges.filter((s) => s.id === offer.student_id)[0]
    if (student.major === major) {
      total += offer.wage_value
      return total
    } else {
      return total
    }
  }, 0)

  return total_wage / n_students
}

const MajorTable = ({data: {majors, students, offers}}) => {
  return (
    <DataTable headers={headers}>
      {majors.map((major, i) => {
        return (
          <DataTableRow key={i}>
            <TableRow>
              <TableCell>{major}</TableCell>
              <TableCell>{students.edges.filter((student) => student.major === major).length}</TableCell>
              <TableCell>
                <NumberFormat
                  value={getAvgWageForMajor(offers, students, major)}
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
      offers {
        edges {
          id
          student_id
          wage_value
          wage_type
        }
      }
    }
  `
});
