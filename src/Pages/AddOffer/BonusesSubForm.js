import React from "react";
import Button from "@material-ui/core/Button";
import { Field, FieldArray } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import * as cx from "classnames";

const useStyles = makeStyles(theme => ({
  bonus: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    border: `2px ${theme.palette.grey[300]} solid`,
    borderRadius: "5px",
    width: "100%",
    margin: 10
  },
  bonusField: {
    minWidth: 220,
    flexGrow: 1
  },
  bonusValueWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1
  },
  bonusValue: {
    width: "90%"
  },
  addButton: {
    marginLeft: "10px",
    marginRight: "auto"
  }
}));

const bonusTypes = ["Cash", "Equity (RSU)", "Equity (Options)", "Relocation"];

const BonusesSubForm = ({ styles, values, handleBlur, handleChange }) => {
  styles = { ...styles, ...useStyles() };
  return (
    <>
      {values.compensation.bonuses.length !== 0 && (
        <Typography variant="h6" className={styles.subtitle}>
          Bonuses
        </Typography>
      )}
      <FieldArray
        name="compensation.bonuses"
        render={arrayHelpers => (
          <>
            {values.compensation.bonuses.map((_, index) => (
              <div className={styles.bonus} key={index}>
                <FormControl
                  margin="normal"
                  variant="filled"
                  className={cx(styles.bonusField, styles.field)}
                >
                  <InputLabel>Bonus Type</InputLabel>
                  <Select
                    name={`compensation.bonuses[${index}].type`}
                    value={values.compensation.bonuses[index].type}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    {bonusTypes.map(type => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className={cx(styles.field, styles.bonusValueWrapper)}>
                  <Field
                    name={`compensation.bonuses[${index}].value`}
                    value={values.compensation.bonuses[index].value}
                    as={TextField}
                    label="Value"
                    variant="filled"
                    className={cx(styles.bonusValue, styles.bonusField)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <IconButton onClick={() => arrayHelpers.remove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            ))}
            <Button
              variant="text"
              color="primary"
              className={styles.addButton}
              startIcon={<AddIcon />}
              onClick={() => arrayHelpers.push({ type: "", value: "" })}
            >
              add bonus
            </Button>
          </>
        )}
      />
    </>
  );
};

export default BonusesSubForm;
