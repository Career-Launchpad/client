import React from "react";
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import * as yup from "yup";

import TextField from "../../components/formik/TextField";
import AutocompleteTextField from "../../components/formik/AutocompleteTextField";
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

export const PersonalFields = {
  label: "Name",
  initialValues: { firstname: "", lastname: "" },
  validationSchema: yup.object().shape({
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required")
  }),
  Fields: () => {
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

export const AcademicFields = {
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
      </>
    );
  }
};

export const DemographicFields = {
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
        <TextField
          select
          name="gender"
          label="Gender (optional)"
          className={cx(styles.smallField, styles.field)}
        >
          {genders.map(g => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          name="ethnicity"
          label="Ethnicity (optional)"
          className={cx(styles.smallField, styles.field)}
        >
          {ethnicities.map(e => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </TextField>
      </>
    );
  }
};
