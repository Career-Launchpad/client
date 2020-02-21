import React, { useContext } from "react";
import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as cx from "classnames";
import * as yup from "yup";

import TextField from "../../components/formik/TextField";
import { AuthContext } from "../../utils/auth";
import environment from "../../utils/environment";

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: 20
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  field: {
    margin: "5px 0"
  },
  smallField: {
    minWidth: 260,
    flexGrow: 1
  }
}));

const studentSchema = yup.object().shape({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  major: yup.string().required("Required"),
  academic_year: yup.string().required("Required"),
  gender: yup.string().required("Required"),
  ethnicity: yup.string().required("Required")
});

const academic_years = ["PhD", "Masters", "Senior", "Junior", "Sophomore", "Freshman"];

const genders = ["Male", "Female", "Other", "Prefer not to answer"];

const ethnicities = [
  "White",
  "Hispanic or Latino",
  "Black or African American",
  "Native American or American Indian",
  "Asian / Pacific Islander",
  "Other",
  "Prefer not to answer"
];

const commit = (input, callback) => {
  commitMutation(environment, {
    mutation: graphql`
      mutation AddStudentForm_Mutation($input: createStudentInput!) {
        student(student: $input) {
          id
          firstname
          lastname
          major
          college_name
          gender
        }
      }
    `,
    variables: { input },
    onCompleted: res => callback(res),
    onError: err => callback({}, err)
  });
};

const AddStudentForm = ({ onSubmit }) => {
  const styles = useStyles();
  const { user } = useContext(AuthContext);
  const handleSubmit = (values, { setSubmitting }) => {
    const student = {
      ...values,
      id: user.uid
    };
    commit(student, (res, err) => {
      setSubmitting(false);
      onSubmit(res);
    });
  };
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        major: "",
        academic_year: "",
        gender: "",
        ethnicity: ""
      }}
      validationSchema={studentSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField label="First Name" name="firstname" className={cx(styles.smallField, styles.field)} />
          <TextField label="Last Name" name="lastname" className={cx(styles.smallField, styles.field)} />
          <TextField label="Major" name="major" className={cx(styles.smallField, styles.field)} />
          <TextField select name="academic_year" label="Academic Year" className={cx(styles.smallField, styles.field)}>
            {academic_years.map(year => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
          <TextField select name="gender" label="Gender" className={cx(styles.smallField, styles.field)}>
            {genders.map(g => (
              <MenuItem key={g} value={g}>
                {g}
              </MenuItem>
            ))}
          </TextField>
          <TextField select name="ethnicity" label="Ethnicity" className={cx(styles.smallField, styles.field)}>
            {ethnicities.map(e => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" type="submit" color="primary" className={styles.button} disabled={isSubmitting}>
            done
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default AddStudentForm;
