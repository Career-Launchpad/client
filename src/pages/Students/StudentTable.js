import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import Icon from "@material-ui/core/Icon";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTable, DataTableRow } from "../../components/DataTable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  clickable: {
    cursor: 'pointer',
    "&:hover": {
      background: '#ececec'
    }
  }
});


const headers = [
  { name: "First Name", id: "firstname" },
  { name: "Last Name", id: "lastname" },
  { name: "Academic Year", id: "academic_year" },
  { name: "Major", id: "major" },
  { name: "Offers Received", id: "offerCount" },
  { name: "Offer Accepted", id: "offerAccepted" }
];

const StudentTable = ({ students, onStudentClicked }) => {
  const styles = useStyles();
  return (
    <DataTable headers={headers}>
      {students.edges.map((rawStudent, i) => {
        let student = { ...rawStudent };
        const offers = student.offers.edges || [];
        student.offerCount = offers.length;
        student.offerAccepted = offers.some(o => o.accepted);
        return (
          <DataTableRow key={student.id || i} data={student}>
            <TableRow
              className={styles.clickable}
              onClick={e => {
                onStudentClicked(student);
                console.log(student);
              }}
            >
              <TableCell>{student.firstname}</TableCell>
              <TableCell>{student.lastname}</TableCell>
              <TableCell>{student.academic_year}</TableCell>
              <TableCell>{student.major}</TableCell>
              <TableCell>{student.offerCount}</TableCell>
              <TableCell>
                {<Icon>{student.offerAccepted ? "check" : "clear"}</Icon>}
              </TableCell>
            </TableRow>
          </DataTableRow>
        );
      })}
    </DataTable>
  );
};

export default createFragmentContainer(StudentTable, {
  students: graphql`
    fragment StudentTable_students on studentConnection {
      edges {
        id
        firstname
        lastname
        academic_year
        major
        offers {
          edges {
            accepted
          }
        }
      }
    }
  `
});
