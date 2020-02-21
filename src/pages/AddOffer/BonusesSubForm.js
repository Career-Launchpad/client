import React from "react";
import Button from "@material-ui/core/Button";
import { FieldArray } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import * as cx from "classnames";

import MoneyField from "../../components/formik/MoneyField";
import TextField from "../../components/formik/TextField";

const useStyles = makeStyles(theme => ({
  bonus: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    border: `2px ${theme.palette.grey[300]} solid`,
    borderRadius: "5px",
    width: "100%",
    margin: 10,
    paddingTop: 10
  },
  bonusField: {
    minWidth: 220,
    flexGrow: 1,
    marginTop: 10
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

const bonusTypes = ["Signing Bonus (Cash)", "Equity (RSU)", "Equity (Options)", "Relocation", "Other"];

const BonusesSubForm = ({ styles, values }) => {
  styles = { ...styles, ...useStyles() };
  return (
    <>
      {values.bonuses.length !== 0 && (
        <Typography variant="body1" className={styles.subtitle}>
          Bonuses
        </Typography>
      )}
      <FieldArray
        name="bonuses"
        render={arrayHelpers => (
          <>
            {values.bonuses.map((bonus, index) => (
              <div className={styles.bonus} key={index}>
                <div></div>
                <TextField
                  select
                  label="Bonus Type"
                  name={`bonuses[${index}].type`}
                  className={cx(styles.bonusField, styles.field)}
                >
                  {bonusTypes.map(type => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
                <div className={cx(styles.field, styles.bonusValueWrapper)}>
                  <MoneyField
                    label="Value"
                    name={`bonuses[${index}].value`}
                    className={cx(styles.bonusValue, styles.bonusField)}
                  />
                  <IconButton onClick={() => arrayHelpers.remove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
                {bonus.type === "Other" && (
                  <TextField
                    label="Description"
                    name={`bonuses[${index}].description`}
                    className={cx(styles.bonusField, styles.field)}
                  />
                )}
              </div>
            ))}
            <Button
              variant="text"
              color="secondary"
              className={styles.addButton}
              startIcon={<AddIcon />}
              onClick={() => arrayHelpers.push({ type: "", value: "", description: "" })}
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
