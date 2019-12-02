import React from "react";
import * as cx from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { Field } from "formik";

import TextField from "../../Shared/TextField";

const positionTypes = ["Full time", "Part time", "Internship", "Contractor"];

const PositionSubForm = ({ styles }) => {
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Position
      </Typography>
      <Field
        label="Position Title"
        name="position_title"
        component={TextField}
        className={cx(styles.smallField, styles.field)}
      />
      <Field
        select
        label="Position Type"
        name="position_type"
        component={TextField}
        className={cx(styles.smallField, styles.field)}
      >
        {positionTypes.map(type => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Field>
      <Field
        fullWidth
        label="Company"
        name="company_name"
        component={TextField}
        className={styles.field}
      />
      <Field
        label="City"
        name="location.city"
        component={TextField}
        className={cx(styles.smallField, styles.field)}
      />
      <Field
        label="State"
        name="location.state"
        component={TextField}
        className={cx(styles.smallField, styles.field)}
      />
      <Field
        label="Country"
        name="location.country"
        component={TextField}
        className={cx(styles.smallField, styles.field)}
      />
    </>
  );
};

export default PositionSubForm;
