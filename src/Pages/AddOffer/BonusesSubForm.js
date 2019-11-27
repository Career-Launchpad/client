import React from "react";
import Button from "@material-ui/core/Button";
import { Field, FieldArray } from "formik";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import * as cx from "classnames";

const BonusesSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <FieldArray
      name="compensation.bonuses"
      render={arrayHelpers => (
        <div className={cx(styles.field, styles.smallField)}>
          {values.compensation.bonuses.length !== 0 && <Typography variant="h6" className={styles.subtitle}>
            Bonuses
          </Typography>}
          {values.compensation.bonuses.map((friend, index) => (
            <div className={styles.bonus} key={index}>
              <Field
                className={styles.field}
                name={`compensation.bonuses[${index}].type`}
                as={TextField}
                label="Type"
                margin="normal"
                variant="filled"
              />
              <Field
                className={styles.field}
                name={`compensation.bonuses[${index}].value`}
                as={TextField}
                label="Value"
                margin="normal"
                variant="filled"
              />
              <IconButton
                className={styles.buttonDeleteIcon}
                onClick={() => arrayHelpers.remove(index)}>
                <DeleteIcon/>
              </IconButton>
            </div>
          ))}
          <div className={styles.smallField}>
            <Button
              variant="text"
              color="primary"
              onClick={() => arrayHelpers.push({ type: '', value: '' })}
            >
              add bonus
            </Button>
          </div>
        </div>
      )}
    />
  );
}

export default BonusesSubForm;
