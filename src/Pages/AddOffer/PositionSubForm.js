import React from "react";
import * as cx from "classnames";
import { TextField as MuiTextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { Field } from "formik";

import TextField from "../../Shared/TextField";

const positionTypes = ["Full time", "Part time", "Internship", "Contractor"];

const PositionSubForm = ({
  styles,
  values,
  errors,
  touched,
  handleBlur,
  handleChange
}) => {
  console.log(errors);
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Position
      </Typography>
      <Field
        component={TextField}
        label="Position Title"
        name="position_title"
        className={cx(styles.smallField, styles.field)}
      />
      <MuiTextField
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        select
        label="Position Type"
        value={values.position_type}
        onBlur={handleBlur}
        onChange={handleChange}
        name="position_type"
      >
        {positionTypes.map(type => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </MuiTextField>
      <MuiTextField
        label="Company"
        name="company_name"
        margin="normal"
        variant="filled"
        fullWidth
        value={values.company_name}
        className={styles.field}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <MuiTextField
        label="City"
        name="location.city"
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        value={values.location.city}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <MuiTextField
        label="State"
        name="location.state"
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        value={values.location.state}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <MuiTextField
        label="Country"
        name="location.country"
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        value={values.location.country}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
};

export default PositionSubForm;
