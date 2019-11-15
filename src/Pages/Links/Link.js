import React from "react";
import { commitMutation, createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import environment from "../../environment";
import styles from "./Link.module.css";

const commit = input =>
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

const Link = ({ link }) => {
  const deleteLinkHandler = () => {
    commit({ id: link.id, title: link.title });
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
