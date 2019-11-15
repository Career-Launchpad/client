import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import LinearProgress from "@material-ui/core/LinearProgress";

import environment from "../../environment";
import AddLink from "./AddLink";
import LinkList from "./LinkList";
import styles from "./LinksPage.module.css";

const query = graphql`
  query LinksPage_Query {
    store {
      links {
        ...LinkList_links
      }
    }
  }
`;

const LinksPage = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      render={({ error, retry, props }) => {
        if (!props) return <LinearProgress color="secondary" />;
        return (
          <div className={styles.content}>
            <LinkList links={props.store.links} />
            <AddLink parentID={props.store.id} />
          </div>
        );
      }}
    />
  );
};

export default LinksPage;
