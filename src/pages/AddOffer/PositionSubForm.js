import React from "react";
import * as cx from "classnames";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import environment from "../../utils/environment";

import AutocompleteTextField from "../../components/formik/AutocompleteTextField";
import TextField from "../../components/formik/TextField";

const positionTypes = ["Full time", "Part time", "Internship", "Contractor"];

const PositionSubForm = ({ styles }) => {
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Position
      </Typography>
      <TextField
        label="Position Title"
        name="position_title"
        className={cx(styles.smallField, styles.field)}
      />
      <TextField
        select
        label="Position Type"
        name="position_type"
        className={cx(styles.smallField, styles.field)}
      >
        {positionTypes.map(type => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <QueryRenderer
        environment={environment}
        query={query}
        render={({ props }) => {
          let loading = !props;
          return (
            <AutocompleteTextField
              label="Company"
              name="company_name"
              className={cx(styles.smallField, styles.field)}
              options={loading ? [] : props.store.company_names}
            />
          );
        }}
      />
      <TextField
        label="City"
        name="location.city"
        className={cx(styles.smallField, styles.field)}
      />
      <TextField
        label="State"
        name="location.state"
        className={cx(styles.smallField, styles.field)}
      />
      <TextField
        label="Country"
        name="location.country"
        className={cx(styles.smallField, styles.field)}
      />
    </>
  );
};

const query = graphql`
  query PositionSubForm_Query {
    store {
      company_names
    }
  }
`;

export default PositionSubForm;
