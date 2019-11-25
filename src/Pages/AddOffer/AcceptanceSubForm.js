import React from "react";
import * as cx from "classnames";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";

const AcceptanceSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <>
      <Typography variant="h6" className={styles.subtitle}>
        Offer Acceptance
      </Typography>
      <KeyboardDatePicker
        label="Date Extended"
        name="extended"
        margin="normal"
        disableToolbar
        variant="inline"
        className={cx(styles.smallField, styles.field)}
        inputVariant="outlined"
        format="MM/dd/yyyy"
        value={values.extended}
        onChange={handleChange}
        onBlur={handleBlur}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
      <KeyboardDatePicker
        label="Acceptance Deadline"
        name="deadline"
        margin="normal"
        disableToolbar
        variant="inline"
        className={cx(styles.smallField, styles.field)}
        inputVariant="outlined"
        format="MM/dd/yyyy"
        value={values.deadline}
        onChange={handleChange}
        onBlur={handleBlur}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </>
  );
};

export default AcceptanceSubForm;
