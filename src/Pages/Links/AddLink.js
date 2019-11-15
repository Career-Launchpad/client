import React, { useState } from "react";
import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import environment from "../../environment";

const commit = input => {
  commitMutation(environment, {
    mutation: graphql`
      mutation AddLink_Mutation($input: CreateLinkInput!) {
        createLink(input: $input) {
          title
          url
        }
      }
    `,
    variables: { input },
    onError: err => console.log(err)
  });
};

const AddLink = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const addLinkHandler = e => {
    e.preventDefault();
    commit({ title, url });
    setUrl("");
    setTitle("");
  };
  return (
    <form onSubmit={addLinkHandler}>
      <div>
        <TextField
          variant="outlined"
          margin="dense"
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          margin="dense"
          placeholder="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        margin="dense"
        color="primary"
        onClick={addLinkHandler}
      >
        Submit
      </Button>
    </form>
  );
};

export default AddLink;
