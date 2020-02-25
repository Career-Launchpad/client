import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Formik } from "formik";
import * as yup from "yup";

import FormPage from "../../components/FormPage";
import TextField from "../../components/formik/TextField";
import Auth, { AUTH_STATE, AuthConsumer } from "../../utils/auth";
import { DEFAULT } from "../../utils/routes";
import styles from "./LoginPage.module.css";

const loginSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .email("Invalid email")
    .required("Required"),
  password: yup.string().required("Required")
});

const Login = () => {
  const { location } = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const routerState = location.state;
  const redirectTo = routerState ? routerState.from.pathname : DEFAULT.path;

  const toggleIsLogin = () => {
    setError("");
    setIsLogin(!isLogin);
  };

  const resendVerificationLink = async () => {
    await Auth.sendVerificationEmail();
  };

  const handleSubmit = async values => {
    setError("");
    setLoading(true);
    const { error } = isLogin
      ? await Auth.login(values)
      : await Auth.signup(values);
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
  };

  return (
    <AuthConsumer>
      {auth => (
        <FormPage loading={loading}>
          {auth.state === AUTH_STATE.AUTHENTICATED && (
            <Redirect to={redirectTo} />
          )}
          <Paper className={styles.paper}>
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
                  <Typography variant="h4">
                    {isLogin ? "Login" : "Sign Up"}
                  </Typography>{" "}
                  <TextField label="Email Address" name="emailAddress" />
                  <TextField label="Password" name="password" type="password" />
                  <div className={styles.buttonContainer}>
                    <Typography
                      variant="body1"
                      color="error"
                      className={styles.error}
                    >
                      {error}
                    </Typography>
                    {auth.state === AUTH_STATE.NEEDS_VERIFICATION && (
                      <>
                        <Typography variant="body1" className={styles.error}>
                          {isLogin
                            ? "Looks like you haven't verified your email yet"
                            : "Account created. Please verify your email address via the link sent to your inbox"}
                          <button
                            type="button"
                            className={styles.buttonLink}
                            onClick={resendVerificationLink}
                          >
                            <Typography color="primary">
                              {"Resend Verification Link"}
                            </Typography>
                          </button>
                        </Typography>
                      </>
                    )}
                    <Typography variant="body1" className={styles.loginPrompt}>
                      If you {isLogin ? "don't yet" : "already"} have an account{" "}
                      <button
                        type="button"
                        className={styles.buttonLink}
                        onClick={toggleIsLogin}
                      >
                        <Typography color="primary">
                          {isLogin ? "sign up" : "login"}
                        </Typography>
                      </button>
                    </Typography>
                    <Button variant="contained" type="submit" color="primary">
                      {isLogin ? "Login" : "Sign Up"}
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </Paper>
        </FormPage>
      )}
    </AuthConsumer>
  );
};

export default Login;
