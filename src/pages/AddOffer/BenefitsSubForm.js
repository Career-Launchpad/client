import React from "react";
import * as cx from "classnames";
import Typography from "@material-ui/core/Typography";

import TextField from "../../components/formik/TextField";
import CheckboxArrayField from "../../components/formik/CheckboxArrayField";

const prefabbedBenefitOptions = [
  "401k matching",
  "Free food",
  "Medical insurance",
  "Dental insurance"
];

const BenefitsSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Benefits
      </Typography>
      <CheckboxArrayField
        styles={styles}
        options={prefabbedBenefitOptions}
        name="benefits_prefabbed"
      />
      <Typography variant="caption" className={styles.field}>
        Describe any additional benefits offered at this position (eg. paid time off, parental leave, etc...)
      </Typography>
      <TextField
        multiline
        rows="3"
        label="Description"
        name="benefits_description"
        className={cx(styles.smallField, styles.field)}
      />
    </>
  );
};

export default BenefitsSubForm;
