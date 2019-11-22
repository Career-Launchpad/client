import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
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
    marginLeft: "auto"
  }
}));

const studentSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  major: yup.string().required("Required"),
  academicYear: yup.string().required("Required")
});

const academicYears = [
  "Freshman",
  "Junior",
  "Sophomore",
  "Senior",
  "Masters",
  "PhD"
];

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
              variant="filled"
              className={cx(styles.smallField, styles.field)}
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              label="Last Name"
              name="lastName"
              margin="normal"
              variant="filled"
              className={cx(styles.smallField, styles.field)}
              value={values.lastName}
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
            <FormControl
              margin="normal"
              variant="filled"
              className={cx(styles.smallField, styles.field)}
            >
              <InputLabel>Academic Year</InputLabel>
              <Select
                name="academicYear"
                value={values.academicYear}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {academicYears.map(year => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
