import React from "react";
import * as cx from "classnames";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";

const AcceptanceSubForm = ({ styles, values, handleBlur, handleChange }) => {
  const formatDate = date =>
    `${date.month()}/${("0" + date.day()).slice(-2)}/${date.year()}`;

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
        onChange={(date, value) => handleChange(value || "")}
        onBlur={handleBlur}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        labelFunc={formatDate}
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
        onChange={(date, value) => handleChange(value || "")}
        onBlur={handleBlur}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        labelFunc={formatDate}
      />
    </>
  );
};

export default AcceptanceSubForm;
