import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as cx from "classnames";
import * as yup from "yup";
import TextField from "../../Shared/Formik/TextField";

const useStyles = makeStyles(theme => ({
  form: {
    backgroundColor: "green"
  }
}));

const loginSchema = yup.object().shape({
  emailAddress: yup.string().required("Required"),
  password: yup.string().required("Required")
});

const Login = ({ onSubmit }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };
  const styles = useStyles();
  return (
    <div className={styles.form}>
      <Typography variant="body1">Hello World</Typography>
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
              className={cx(styles.smallField, styles.field)}
            />
            <TextField
              label="Password"
              name="password"
              className={cx(styles.smallField, styles.field)}
            />
            <div className={cx(styles.smallField, styles.field)}></div>
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
  );
};

export default Login;
