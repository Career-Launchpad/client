import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as cx from "classnames";
import * as yup from "yup";

import TextField from "../../components/formik/TextField";
import Auth, { AUTH_STATE, AuthConsumer } from "../../utils/auth";
import { DEFAULT } from "../../utils/routes";

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

const loginSchema = yup.object().shape({
  emailAddress: yup.string().required("Required"),
  password: yup.string().required("Required")
});

const Login = () => {
  const styles = useStyles();
  const { location } = useHistory();
  const [error, setError] = useState("");

  const routerState = location.state;
  const redirectTo = routerState ? routerState.from.pathname : DEFAULT.path;

  const handleSubmit = async values => {
    const { error } = await Auth.login(values);
    if (error) {
      setError(error.message);
      return;
    }
  };

  return (
    <AuthConsumer>
      {({ state }) => (
        <>
          {state === AUTH_STATE.AUTHENTICATED && <Redirect to={redirectTo} />}
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
                    type="password"
                    className={cx(styles.smallField, styles.field)}
                  />
                  <div className={cx(styles.smallField, styles.field)}></div>
                  <Typography className={styles.error} variant="body1">
                    {error}
                  </Typography>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    className={styles.button}
                  >
                    Login
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </>
      )}
    </AuthConsumer>
  );
};

export default Login;
