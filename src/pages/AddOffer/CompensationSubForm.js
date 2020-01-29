import React from "react";
import * as cx from "classnames";
import Typography from "@material-ui/core/Typography";
import BonusesSubForm from "./BonusesSubForm";

import AutocompleteTextField from "../../components/formik/AutocompleteTextField";
import MoneyField from "../../components/formik/MoneyField";

const compensationTypes = ["Salary", "Hourly", "On-completion"];

const CompensationSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Compensation
      </Typography>
      <AutocompleteTextField
        label="Wage Type"
        name="wage_type"
        className={cx(styles.smallField, styles.field)}
        options={compensationTypes}
      />
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
