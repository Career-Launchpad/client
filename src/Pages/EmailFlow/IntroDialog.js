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
  },
  link: {
    textDecoration: "underline",
    color: theme.palette.primary.main
  }
}));

const IntroDialog = ({ onSubmit }) => {
  const styles = useStyles();
  return (
    <div className={styles.form}>
      <Typography variant="body1">
        Your school has requested that you input information regarding your job
        hunt. Please click "BEGIN" to continue. Your information will be used in
        accordance with our{" "}
        <a className={styles.link} href="/privacy-policy" target="blank">
          privacy policy
        </a>
        . By proceeding, you agree to the terms of this policy.
      </Typography>
      <div className={cx(styles.smallField, styles.field)}></div>
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        className={styles.button}
      >
        begin
      </Button>
    </div>
  );
};

export default IntroDialog;
