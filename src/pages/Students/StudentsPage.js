import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../utils/environment";

import Layout from "../../components/Layout";
import StudentTable from "./StudentTable";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

const Students = () => {
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
              <StudentTable students={props.store.students} />
            </div>
          );
        }}
      />
    </Layout>
  );
};

const query = graphql`
  query StudentsPage_Query {
    store {
      students {
        ...StudentTable_students
      }
    }
  }
`;

export default Students;

