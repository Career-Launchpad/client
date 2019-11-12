import React from "react";
import { commitMutation, createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import styles from "./Link.module.css";

const commit = (environment, input) =>
  commitMutation(environment, {
    mutation: graphql`
      mutation Link_Mutation($input: DeleteLinkInput!) {
        deleteLink(input: $input) {
          id
          title
        }
      }
    `,
    variables: { input },
    onError: err => console.log(err)
  });

const Link = ({ link, relay }) => {
  const deleteLinkHandler = () => {
    commit(relay.environment, { id: link.id, title: link.title });
  };

  return (
    <h2 className={styles.link}>
      <a href={link.url}>{link.title}</a>
      <IconButton onClick={deleteLinkHandler}>
        <Icon>delete</Icon>
      </IconButton>
    </h2>
  );
};

export default createFragmentContainer(Link, {
  link: graphql`
    fragment Link_link on Link {
      id
      title
      url
    }
  `
});
