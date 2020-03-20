import React from "react";
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";

import TextField from "../../../components/formik/TextField";
import AutocompleteTextField from "../../../components/formik/AutocompleteTextField";
import Combobox from "../../../components/formik/Combobox";
import majors from "./majors";

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

export const PersonalStep = {
  label: "Name",
  initialValues: { firstname: "", lastname: "" },
  validationSchema: yup.object().shape({
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required")
  }),
  Fields: props => {
    const styles = useStyles();

    return (
      <>
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
      </>
    );
  }
};

export const AcademicStep = {
  label: "Academic",
  initialValues: { major: "", academic_year: "" },
  validationSchema: yup.object().shape({
    major: yup.string().required("Required"),
    academic_year: yup.string().required("Required")
  }),
  Fields: () => {
    const styles = useStyles();
    const academic_years = [
      "PhD",
      "Masters",
      "Senior",
      "Junior",
      "Sophomore",
      "Freshman"
    ];

    return (
      <>
        <AutocompleteTextField
          label="Major"
          name="major"
          className={cx(styles.smallField, styles.field)}
          options={majors}
        />
        <Combobox
          label="Academic Year"
          name="academic_year"
          className={cx(styles.smallField, styles.field)}
          options={academic_years}
        />
      </>
    );
  }
};

export const DemographicStep = {
  label: "Demographics",
  initialValues: { gender: "", ethnicity: "" },
  Fields: () => {
    const styles = useStyles();
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
    return (
      <>
        <Combobox
          label="Gender (optional)"
          name="gender"
          className={cx(styles.smallField, styles.field)}
          options={genders}
        />
        <Combobox
          label="Ethnicity (optional)"
          name="ethnicity"
          className={cx(styles.smallField, styles.field)}
          options={ethnicities}
        />
      </>
    );
  }
};
