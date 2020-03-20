import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { useEnvironment } from "../../utils/environment";

import Layout from "../../components/Layout";
import CompanyTable from "./CompanyTable";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

const CompaniesPage = () => {
  const [loading, setLoading] = useState(false);
  const environment = useEnvironment();
  const styles = useStyles();
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
            <div>
              <div className={styles.content}>
                <CompanyTable companies={props.store.companies} />
              </div>
            </div>
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
