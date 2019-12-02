import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as cx from "classnames";
import * as yup from "yup";

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

const studentSchema = yup.object().shape({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  major: yup.string().required("Required"),
  academic_year: yup.string().required("Required")
});

const academic_years = [
  "PhD",
  "Masters",
  "Senior",
  "Junior",
  "Sophomore",
  "Freshman"
];

const AddStudentForm = ({ onSubmit }) => {
  const styles = useStyles();
  return (
    <>
      <Typography variant="h4">Personal Information</Typography>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          major: "",
          academic_year: ""
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
              name="firstname"
              margin="normal"
              variant="filled"
              className={cx(styles.smallField, styles.field)}
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              label="Last Name"
              name="lastname"
              margin="normal"
              variant="filled"
              className={cx(styles.smallField, styles.field)}
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              label="Major"
              name="major"
              margin="normal"
              variant="filled"
              fullWidth
              value={values.major}
              className={styles.field}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              margin="normal"
              variant="filled"
              select
              className={cx(styles.smallField, styles.field)}
              name="academic_year"
              label="Academic Year"
              value={values.academic_year}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {academic_years.map(year => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </TextField>
            <div className={cx(styles.smallField, styles.field)}></div>
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
