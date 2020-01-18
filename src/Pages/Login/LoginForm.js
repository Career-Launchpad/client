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
  const { user, signOut, signInWithGoogle } = this.props;
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </header>
    </div>
    // <div className={styles.form}>
    //   <Typography variant="body1">Hello World</Typography>
    //   <Formik
    //     initialValues={{
    //       emailAddress: "",
    //       password: ""
    //     }}
    //     validationSchema={loginSchema}
    //     onSubmit={handleSubmit}
    //   >
    //     {({ handleSubmit }) => (
    //       <form onSubmit={handleSubmit} className={styles.form}>
    //         <TextField
    //           label="Email Address"
    //           name="emailAddress"
    //           className={cx(styles.smallField, styles.field)}
    //         />
    //         <TextField
    //           label="Password"
    //           name="password"
    //           className={cx(styles.smallField, styles.field)}
    //         />
    //         <div className={cx(styles.smallField, styles.field)}></div>
    //         <Button
    //           variant="contained"
    //           type="submit"
    //           color="primary"
    //           className={styles.button}
    //         >
    //           Login
    //         </Button>
    //       </form>
    //     )}
    //   </Formik>
    // </div>
  );
};

export default Login;
