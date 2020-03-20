import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { useEnvironment } from "../../utils/environment";

import Layout from "../../components/Layout";
import MajorTable from "./MajorTable";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

const MajorsPage = () => {
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
            <div className={styles.content}>
              <MajorTable data={props.store} />
            </div>
          );
        }}
      />
    </Layout>
  );
};

const query = graphql`
  query MajorsPage_Query {
    store {
      ...MajorTable_data
    }
  }
`;

export default MajorsPage;
