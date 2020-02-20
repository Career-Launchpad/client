import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../utils/environment";

import Layout from "../../components/Layout";
import MajorTable from "./MajorTable";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

const MajorsPage = () => {
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
              <MajorTable majors={props.store} />
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
      ...MajorTable_majors
    }
  }
`;

export default MajorsPage;
