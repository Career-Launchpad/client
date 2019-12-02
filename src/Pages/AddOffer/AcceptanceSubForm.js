import React from "react";
import * as cx from "classnames";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Field } from "formik";
import { isBefore } from "date-fns";
import DatePickerField from "../../Shared/DatePickerField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  checkbox: {
    margin: 0
  }
}));

const AcceptanceSubForm = ({ styles, values, handleChange }) => {
  styles = { ...styles, ...useStyles() };
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Offer Acceptance
      </Typography>
      <Field
        label="Date Extended"
        name="extended"
        component={DatePickerField}
        className={cx(styles.smallField, styles.field)}
      />
      <Field
        label="Acceptance Deadline"
        name="deadline"
        shouldDisableDate={day => isBefore(new Date(day), values.extended)}
        component={DatePickerField}
        className={cx(styles.smallField, styles.field)}
      />
      <FormControlLabel
        className={styles.checkbox}
        control={
          <Checkbox
            name="accepted"
            checked={values.accepted}
            onChange={handleChange}
          />
        }
        label="Accepted"
      />
    </>
  );
};

export default AcceptanceSubForm;
