import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  textField: {
    width: 260
  },
  button: {
    marginLeft: "auto"
  }
}));

const studentSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  major: yup.string().required("Required"),
  academicYear: yup.string().required("Required")
});

const AddStudentForm = ({ onSubmit }) => {
  const styles = useStyles();
  return (
    <>
      <Typography variant="h4">Personal Information</Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          major: "",
          academicYear: ""
        }}
        validationSchema={studentSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          dirty,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              label="First Name"
              name="firstName"
              margin="normal"
              className={styles.textField}
              variant="filled"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              label="Last Name"
              name="lastName"
              margin="normal"
              className={styles.textField}
              variant="filled"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              label="Major"
              name="major"
              fullWidth
              margin="normal"
              variant="filled"
              value={values.major}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              label="Academic Year"
              name="academicYear"
              helperText="Freshman, Junior, Sophomore, Senior, Masters, PhD"
              fullWidth
              margin="normal"
              variant="filled"
              value={values.academicYear}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={styles.button}
              disabled={!dirty || !isValid || isSubmitting}
            >
              done
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddStudentForm;
