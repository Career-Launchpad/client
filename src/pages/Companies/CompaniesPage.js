import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ClosableDialog from "../../components/ClosableDialog";
import Layout from "../../components/Layout";
import CompanyTable from "./CompanyTable";
import { useEnvironment } from "../../utils/environment";
import Bar from "../../components/charts/Bar";
import Doughnut from "../../components/charts/Doughnut";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  },
  modalContent: {
    padding: "20px"
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
  let monthSorted = [];
  const monthMap = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  for (let i = 0; i < 12; i++) {
    monthSorted.push(0);
  }

  if (company && company.offers) {
    offers = company.offers.edges;
    offers.forEach(offer => {
      const month = new Date(parseInt(offer.timestamp)).getMonth();
      monthSorted[month]++;
    });
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
      <div className={styles.modalContent}>
        {offers.length > 0 && (
          <div className={styles.acceptedOffers}>
            <div>
              Offer Acceptance Rate: {(numAccepted / offers.length) * 100 + "%"}
            </div>
            <span>
              <Doughnut
                data={[numAccepted, offers.length - numAccepted]}
                labels={["Accepted", "Rejected"]}
                title={""}
              />
            </span>
          </div>
        )}
        <div className={styles.offersByMonth}>
          <span className={styles.doughnutChart}>
            {offers.length > 0 && (
              <Bar
                labels={monthMap}
                data={monthSorted}
                label="Number of Student Offers"
                title="Offers by Month"
              />
            )}
          </span>
        </div>
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
