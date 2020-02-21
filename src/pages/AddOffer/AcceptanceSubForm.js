import React from "react";
import * as cx from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";

import TextField from "../../components/formik/TextField";
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
      <DatePicker label="Date Extended" name="extended" className={cx(styles.smallField, styles.field)} />
      <TextField select label="Accepted" name="accepted" className={cx(styles.smallField, styles.field)}>
        {acceptedOptions.map(entry => (
          <MenuItem key={entry} value={entry}>
            {entry}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default AcceptanceSubForm;
