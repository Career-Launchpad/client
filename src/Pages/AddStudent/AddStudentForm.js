import React from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as cx from "classnames";
import * as yup from "yup";

import TextField from "../../Shared/Formik/TextField";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "0 -10px"
  },
  field: {
    margin: "5px 10px"
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
        onSubmit={(values, { isValid, setSubmitting }) => {
          setTimeout(() => {
            isValid && onSubmit(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              label="First Name"
              name="firstname"
              className={cx(styles.smallField, styles.field)}
            />
            <TextField
              label="Last Name"
              name="lastname"
              className={cx(styles.smallField, styles.field)}
            />
            <TextField
              fullWidth
              label="Major"
              name="major"
              className={styles.field}
            />
            <TextField
              select
              name="academic_year"
              label="Academic Year"
              className={cx(styles.smallField, styles.field)}
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
              disabled={isSubmitting}
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
