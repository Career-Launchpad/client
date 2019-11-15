import React from "react";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import Link from "./Link";

const LinkList = ({ links }) => (
  <>
    {links.items.map(link => (
      <Link key={link.id} link={link} />
    ))}
  </>
);

export default createFragmentContainer(LinkList, {
  links: graphql`
    fragment LinkList_links on LinkConnection {
      items {
        id
        ...Link_link
      }
    }
  `
});
