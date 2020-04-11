import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import Icon from "@material-ui/core/Icon";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTable, DataTableRow } from "../../components/DataTable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  const hoverStyle = theme.palette.type === "light" ? "primary" : "secondary";
  return {
    clickable: {
      cursor: "pointer",
      "&:hover": {
        background: theme.palette[hoverStyle].hover
      }
    }
  };
});

export const columns = [
  { name: "First Name", id: "firstname", type: "string" },
  { name: "Last Name", id: "lastname", type: "string" },
  {
    name: "Academic Year",
    id: "academic_year",
    type: ["PhD", "Masters", "Senior", "Junior", "Sophomore", "Freshman"]
  },
  { name: "Major", id: "major", type: "string" },
  {
    name: "Offers Received",
    id: "offerCount",
    type: "int",
    disableFiltering: true
  },
  {
    name: "Offer Accepted",
    id: "offerAccepted",
    type: "boolean",
    disableFiltering: true
  }
];

const StudentTable = ({ students, onStudentClicked }) => {
  const styles = useStyles();
  return (
    <DataTable headers={columns}>
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
          ...OfferTable_offers
          edges {
            accepted
          }
        }
      }
    }
  `
});
