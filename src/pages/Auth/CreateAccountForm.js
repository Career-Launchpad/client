import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as cx from "classnames";
import * as yup from "yup";
import TextField from "../../Shared/Formik/TextField";
import { createNewUser } from "./AuthUtils";

const useStyles = makeStyles(theme => ({
  form: {
    backgroundColor: "lightgray"
  },
  emailAddress: {
    marginRight: "1rem"
  },
  error: {
    color: "red"
  }
}));

const eligibleDomainList = [];

const loginSchema = yup.object().shape({
  emailAddress: yup.string().required("Required"),
  password: yup.string().required("Required")
});

const CreateAccount = ({ onSubmit }) => {
  const styles = useStyles();
  let errorMessage;

  const handleSubmit = async values => {
    errorMessage = await createNewUser(values);
  };

  return (
    <div className={styles.form}>
      <Formik
        initialValues={{
          emailAddress: "",
          password: ""
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              label="Email Address"
              name="emailAddress"
              className={cx(
                styles.smallField,
                styles.field,
                styles.emailAddress
              )}
            />
            <TextField
              label="Password"
              name="password"
              className={cx(styles.smallField, styles.field)}
            />
            <div className={cx(styles.smallField, styles.field)}></div>
            <Typography className={styles.error} variant="body1">
              {errorMessage}
            </Typography>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={styles.button}
            >
              Create Account
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(CreateAccount);
