import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../utils/environment";

import Layout from "../../components/Layout";
import OfferTable from "./OfferTable";
import OffersLineGraph from "./OffersLineGraph";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

const OffersPage = () => {
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
          console.log(props.store.offers[0]);
          var data = props.store.offers.map(o => o.salary);
          var labels = props.store.offers.map(o => o.firstName);
          return (
            <div className={styles.content}>
              <OffersLineGraph
                data={data}
                labels={labels}
              />
              <OfferTable offers={props.store.offers} />
            </div>
          );
        }}
      />
    </Layout>
  );
};

const query = graphql`
  query OffersPage_Query {
    store {
      offers {
        ...OfferTable_offers
      }
    }
  }
`;

export default OffersPage;
