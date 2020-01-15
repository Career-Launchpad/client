import React from "react";
import * as cx from "classnames";
import Typography from "@material-ui/core/Typography";

import TextField from "../../Shared/Formik/TextField";


const BenefitsSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Benefits
      </Typography>
      <Typography variant="caption" className={styles.field}>
          Describe any additional benefits offered at this position.
           {/* 
           TODO: Information about what kind of information to include here (modal?)
           Some examples of benefits that you might consider describing are: 
          <ul>
            <li>401k plan and contribution</li>
            <li>free meals</li>
            <li>medical/dental insurance</li>
            <li>etc.</li>
          </ul> */}
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
