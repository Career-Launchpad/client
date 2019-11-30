import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as cx from "classnames";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "0 -10px"
  },
  field: {
    margin: "10px"
  },
  smallField: {
    minWidth: 260,
    flexGrow: 1
  },
  button: {
    marginLeft: "auto",
    marginRight: "10px"
  }
}));

const ThankYouDialog = ({ onSubmit }) => {
  const styles = useStyles();
  return (
    <div className={styles.form}>
      <Typography variant="h5">Thank you!</Typography>
      <Typography variant="body1">
        You can update information about your offers by going to your dashboard.
      </Typography>
      <div className={cx(styles.smallField, styles.field)}></div>
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        className={styles.button}
      >
        Finish
      </Button>
    </div>
  );
};

export default ThankYouDialog;
