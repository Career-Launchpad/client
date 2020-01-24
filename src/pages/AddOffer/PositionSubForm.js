import React from "react";
import * as cx from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

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
      <AutocompleteTextField
        label="Company"
        name="company_name"
        className={cx(styles.smallField, styles.field)}
        options={[
          "Brevium",
          "Qualtrics",
          "Simplifile",
          "Lucid",
          "Plaid",
          "Podium",
          "Chief Architect",
          "Proofpoint"
        ]}
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

export default PositionSubForm;
