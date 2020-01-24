import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import NumberFormat from "react-number-format";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

const OfferTable = ({ offers }) => {
  const styles = useStyles();
  return (
    <Paper className={styles.root}>
      <Table className={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Position</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Compensation Type</TableCell>
            <TableCell>Compensation Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offers.edges &&
            offers.edges.map((offer, i) => (
              <TableRow key={offer.id || i}>
                <TableCell>{offer.position_title}</TableCell>
                <TableCell>{offer.company_name}</TableCell>
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
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default createFragmentContainer(OfferTable, {
  offers: graphql`
    fragment OfferTable_offers on offerConnection {
      edges {
        offer_id
        position_type
        position_title
        location {
          state
        }
        company_name
        academic_year
        wage_type
        wage_value
      }
    }
  `
});
