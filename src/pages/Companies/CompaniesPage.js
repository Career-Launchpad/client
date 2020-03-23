import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ClosableDialog from "../../components/ClosableDialog";
import Layout from "../../components/Layout";
import CompanyTable from "./CompanyTable";
import { useEnvironment } from "../../utils/environment";
import ChartHelper from "../../components/ChartHelper";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  },
  dialog: {
    overflowX: "hidden"
  },
  acceptedOffers: {
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "row"
  },
  doughnutChart: {
    marginLeft: "4rem",
    maxWidth: "8rem"
  }
}));

const Dialog = ({ open, company, onExited, onClose }) => {
  let offers = [];
  if (company && company.offers) {
    offers = company.offers.edges;
  }
  const numAccepted = offers.filter(offer => offer.accepted === true).length;
  const styles = useStyles();
  return (
    <ClosableDialog
      classes={{ paper: styles.dialog }}
      onClose={onClose}
      open={open}
      title={company ? company.name : "Company Information"}
      onExited={onExited}
    >
      <div className={styles.acceptedOffers}>
        <div>
          Offers Accepted: {numAccepted}/{offers.length}
        </div>
        <span className={styles.doughnutChart}>
          <ChartHelper
            data={[numAccepted, offers.length - numAccepted]}
            backgroundColor={["#0251B7", "#ebebeb"]}
            fillText={`${(numAccepted / (offers.length - numAccepted)) * 100}%`}
            borderColor={"#ffffff"}
            hoverBorderColor={"#ffffff"}
            labels={["Accepted", "Total Offers"]}
            title={"Offers Accepted"}
            type={"doughnut"}
          />
        </span>
      </div>
    </ClosableDialog>
  );
};

const CompaniesPage = () => {
  const environment = useEnvironment();
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
                <CompanyTable
                  companies={props.store.companies}
                  onCompanyClicked={openDialog}
                />
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
