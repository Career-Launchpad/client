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
    margin: 10,
    marginLeft: "auto"
  }
}));

const OfferDialog = ({ onSubmit }) => {
  const styles = useStyles();
  return (
    <div className={styles.form}>
      <Typography variant="body1">
        Have you received an offer(s) as part of your job search so far?
      </Typography>
      <div className={cx(styles.smallField, styles.field)}></div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSubmit(false)}
        className={styles.button}
      >
        no
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSubmit(true)}
        className={styles.button}
      >
        yes
      </Button>
    </div>
  );
};

export default OfferDialog;
