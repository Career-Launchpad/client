import React from "react";
import * as cx from "classnames";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { isBefore } from "date-fns";
import { makeStyles } from "@material-ui/core";

import DatePicker from "../../Shared/Formik/DatePicker";

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
