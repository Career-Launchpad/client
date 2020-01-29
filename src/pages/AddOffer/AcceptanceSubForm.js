import React from "react";
import * as cx from "classnames";
import Typography from "@material-ui/core/Typography";
import { isBefore } from "date-fns";
import { makeStyles } from "@material-ui/core";

import AutocompleteTextField from "../../components/formik/AutocompleteTextField";
import DatePicker from "../../components/formik/DatePicker";

const useStyles = makeStyles(theme => ({
  checkbox: {
    margin: 0
  }
}));

const acceptedOptions = ["Yes", "No"];

const AcceptanceSubForm = ({ styles, values, handleChange }) => {
  styles = { ...styles, ...useStyles() };
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Offer Acceptance
      </Typography>
      <DatePicker
        label="Date Extended"
        name="extended"
        className={cx(styles.smallField, styles.field)}
      />
      <DatePicker
        label="Acceptance Deadline"
        name="deadline"
        className={cx(styles.smallField, styles.field)}
        shouldDisableDate={day => isBefore(new Date(day), values.extended)}
      />
      <AutocompleteTextField
        label="Accepted"
        name="accepted"
        className={cx(styles.smallField, styles.field)}
        options={acceptedOptions}
      />
    </>
  );
};

export default AcceptanceSubForm;
