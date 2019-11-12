import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import Nav from "../../Nav/Nav";
import AddLink from "./AddLink";
import LinkList from "./LinkList";

const LinksPage = ({ store }) => {
  return (
    <Nav>
      <LinkList links={store.links} />
      <AddLink parentID={store.id} />
    </Nav>
  );
};

export default createFragmentContainer(LinksPage, {
  store: graphql`
    fragment LinksPage_store on Store {
      links {
        ...LinkList_links
      }
    }
  `
});
