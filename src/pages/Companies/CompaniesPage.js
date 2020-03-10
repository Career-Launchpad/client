import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../utils/environment";
import ClosableDialog from "../../components/ClosableDialog";
import Typography from "@material-ui/core/Typography";
import Layout from "../../components/Layout";
import CompanyTable from "./CompanyTable";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

const Dialog = ({ open, company, onExited, onClose }) => {
  const styles = useStyles();
  return (
    <ClosableDialog
      classes={{ paper: styles.dialog }}
      onClose={onClose}
      open={open}
      title= {company ? company.name : 'Company Information'}
      onExited={onExited}
    >
      <Typography
        variant="h5"
      >
        {company && `${company.name}`}
      </Typography>
    </ClosableDialog>
  );
};


const CompaniesPage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState(null);
  const styles = useStyles();

  const openDialog = company => {
    setOpen(true);
    document.getElementById("root").classList.add("blur-effect");
    setCompany(company);
  };

  const handleClose = () => {
    document.getElementById("root").classList.remove("blur-effect");
    setOpen(false);
  };

  const handleDialogExited = () => {
    setCompany(null);
  };

  return (
    <Layout loading={loading}>
      <QueryRenderer
        environment={environment}
        query={query}
        cacheConfig={{ force: true }}
        render={({ props }) => {
          setLoading(!props);
          if (!props) return <div />;
          return (
            <>
              <div className={styles.content}>
                <CompanyTable companies={props.store.companies} onCompanyClicked={openDialog} />
              </div>
              <Dialog
                company={company}
                open={open}
                onClose={handleClose}
                onExited={handleDialogExited}
              />
            </>
          );
        }}
      />
    </Layout>
  );
};

const query = graphql`
  query CompaniesPage_Query {
    store {
      companies {
        ...CompanyTable_companies
      }
    }
  }
`;

export default CompaniesPage;
