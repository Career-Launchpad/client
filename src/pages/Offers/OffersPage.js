import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { useEnvironment } from "../../utils/environment";

import Layout from "../../components/Layout";
import OfferTable from "./OfferTable";
import OfferSalariesLineGraph from "./OfferSalariesLineGraph";
import OffersPerCompanyBarGraph from "./OffersPerCompanyBarGraph";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

const OffersPage = () => {
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
          // console.log(props.store.offers.edges[0]);
          // var data = props.store.offers.edges.map(o => o.salary);
          // var labels = props.store.offers.edges.map(o => o.firstName);
          return (
            <div className={styles.content}>
              <OfferSalariesLineGraph
                offers={props.store.offers}
              />
              <OffersPerCompanyBarGraph
                offers={props.store.offers}
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
