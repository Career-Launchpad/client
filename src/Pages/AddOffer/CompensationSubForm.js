import React from "react";
import * as cx from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import BonusesSubForm from "./BonusesSubForm";

import TextField from "../../Shared/Formik/TextField";
import MoneyField from "../../Shared/Formik/MoneyField";

const compensationTypes = ["Salary", "Hourly", "On-completion"];

const CompensationSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Compensation
      </Typography>
      <TextField
        select
        label="Wage Type"
        name="wage_type"
        className={cx(styles.smallField, styles.field)}
      >
        {compensationTypes.map(type => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>
      <MoneyField
        label="Wage Value"
        name="wage_value"
        className={cx(styles.smallField, styles.field)}
      />
      <BonusesSubForm
        styles={styles}
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </>
  );
};

export default CompensationSubForm;
