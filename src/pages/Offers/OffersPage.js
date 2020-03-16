import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../utils/environment";

import FilterControls from "../../components/FilterControls";
import Layout from "../../components/Layout";
import OfferTable from "./OfferTable";

const useStyles = makeStyles(theme => ({
  content: {
    margin: 20
  }
}));

const OffersPage = () => {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(null);
  const styles = useStyles();
  return (
    <Layout loading={loading}>
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{filters: filters}}
        cacheConfig={{ force: true }}
        render={({ props }) => {
          setLoading(!props);
          if (!props) return <div />;
          return (
            <div className={styles.content}>
              <FilterControls onChange={setFilters} onClear={() => setFilters(null)}></FilterControls>
              <OfferTable offers={props.store.offers} />
            </div>
          );
        }}
      />
    </Layout>
  );
};

const query = graphql`
  query OffersPage_Query($filters: [filter]) {
    store {
      offers(filters: $filters) {
        ...OfferTable_offers
      }
    }
  }
`;

export default OffersPage;
