import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import Icon from "@material-ui/core/Icon";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTable, DataTableRow } from "../../components/DataTable";
import { makeStyles } from "@material-ui/core/styles";
import { getCurrentTheme } from "../../utils/theme";
import { OffersTableFragment } from "../Offers/OfferTable";

const theme = getCurrentTheme();
let themeType = theme.palette.type;
let chosenTheme = themeType === "light" ? "primary" : "secondary";

const useStyles = makeStyles({
  clickable: {
    cursor: "pointer",
    "&:hover": {
      background: theme.palette[chosenTheme].hover
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

//This is a private component that consumes the OfferTable_offers fragment to display the length
const OffersCount = createFragmentContainer(({offers}) => <>{offers.edges.length}</>, {
  offers: OffersTableFragment
});

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
              <TableCell><OffersCount offers={student.offers}/></TableCell>
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
        }
      }
    }
  `
});
