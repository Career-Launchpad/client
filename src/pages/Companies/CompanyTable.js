import React from "react";
import { createFragmentContainer } from "react-relay";
import { makeStyles } from "@material-ui/styles";
import { graphql } from "babel-plugin-relay/macro";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { DataTable, DataTableRow } from "../../components/DataTable";

const headers = [{ name: "Name", id: "name" }];
const useStyles = makeStyles(theme => ({
  row: {
    cursor: 'pointer'
  }
}));

const CompanyTable = ({ companies , onCompanyClicked}) => {
  const styles = useStyles();
  return (
    <DataTable headers={headers}>
      {companies.edges.map((Company, i) => {
        return (
          <DataTableRow key={Company.id || i} data={Company}>
            <TableRow className={styles.row} onClick={e => {
              onCompanyClicked(Company);
            }}>
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
    fragment CompanyTable_companies on companyConnection {
      edges {
        id
        name
      }
    }
  `
});
