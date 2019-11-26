import React from "react";
import * as cx from "classnames";
import Typography from "@material-ui/core/Typography";
import { Field } from "formik";
import DatePickerField from "../../Shared/DatePickerField";
import moment from "moment";

const AcceptanceSubForm = ({ styles, values }) => {
  return (
    <>
      <Typography variant="h6" className={styles.subtitle}>
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
        shouldDisableDate={day => moment(day).isBefore(values.extended)}
        component={DatePickerField}
        className={cx(styles.smallField, styles.field)}
      />
    </>
  );
};

export default AcceptanceSubForm;
