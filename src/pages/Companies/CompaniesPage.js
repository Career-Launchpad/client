import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../utils/environment";

import Layout from "../../components/Layout";
import CompanyTable from "./CompanyTable";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

const CompanysPage = () => {
  const [loading, setLoading] = useState(false);
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
            <div className={styles.content}>
              <CompanyTable Companys={props.store.Companys} />
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
        ...CompanyTable_Companies
      }
    }
  }
`;

export default CompanysPage;
