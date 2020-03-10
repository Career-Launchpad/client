import React from "react";
import { QueryRenderer } from "react-relay";
import { makeStyles } from "@material-ui/core/styles";
import graphql from "babel-plugin-relay/macro";
import cx from "classnames";
import * as yup from "yup";

import BonusesSubForm from "./BonusesSubForm";
import TextField from "../../../components/formik/TextField";
import MoneyField from "../../../components/formik/MoneyField";
import DatePicker from "../../../components/formik/DatePicker";
import Combobox from "../../../components/formik/Combobox";
import AutocompleteTextField from "../../../components/formik/AutocompleteTextField";
import CheckboxArrayField from "../../../components/formik/CheckboxArrayField";
import environment from "../../../utils/environment";

const useStyles = makeStyles(theme => ({
  field: {
    margin: "5px 10px"
  },
  smallField: {
    minWidth: 260,
    flexGrow: 1
  },
  buttonSubmit: {
    marginRight: "10px",
    marginTop: "10px"
  }
}));

export const PositionStep = {
  label: "Position",
  initialValues: { position_title: "", position_type: "" },
  validationSchema: yup.object().shape({
    position_title: yup.string().required("Required"),
    position_type: yup.string().required("Required")
  }),
  Fields: () => {
    const styles = useStyles();
    const positionTypes = [
      "Full time",
      "Part time",
      "Internship",
      "Contractor"
    ];
    return (
      <>
        <TextField
          label="Position Title"
          name="position_title"
          className={cx(styles.smallField, styles.field)}
        />
        <Combobox
          label="Position Type"
          name="position_type"
          className={cx(styles.smallField, styles.field)}
          options={positionTypes}
        />
      </>
    );
  }
};

export const CompanyStep = {
  label: "Company",
  initialValues: {
    company_name: "",
    location: {
      city: "",
      state: "",
      country: ""
    }
  },
  validationSchema: yup.object().shape({
    company_name: yup.string().required("Required"),
    location: yup.object().shape({
      city: yup.string().required("Required"),
      state: yup.string(),
      country: yup.string().required("Required")
    })
  }),
  Fields: () => {
    const styles = useStyles();
    return (
      <>
        <QueryRenderer
          environment={environment}
          query={query}
          render={({ props }) => {
            let loading = !props;
            return (
              <AutocompleteTextField
                freeSolo
                label="Company"
                name="company_name"
                className={cx(styles.smallField, styles.field)}
                options={loading ? [] : props.store.company_names}
              />
            );
          }}
        />
        <TextField
          label="City"
          name="location.city"
          className={cx(styles.smallField, styles.field)}
        />
        <TextField
          label="State"
          name="location.state"
          className={cx(styles.smallField, styles.field)}
        />
        <TextField
          label="Country"
          name="location.country"
          className={cx(styles.smallField, styles.field)}
        />
      </>
    );
  }
};

const query = graphql`
  query AddOfferSteps_Company_Query {
    store {
      company_names
    }
  }
`;

export const CompensationStep = {
  label: "Compensation",
  initialValues: { wage_type: "", wage_value: "", bonuses: [] },
  validationSchema: yup.object().shape({
    wage_type: yup.string().required("Required"),
    wage_value: yup.string().required("Required"),
    bonuses: yup.array().of(
      yup.object().shape({
        type: yup.string().required("Required"),
        value: yup.string().required("Required"),
        repeat_interval: yup.string(),
        repeat_count: yup.number(),
        one_time: yup.bool(),
        description: yup.string()
      })
    )
  }),
  Fields: ({ values }) => {
    const styles = useStyles();
    const compensationTypes = ["Salary", "Hourly", "On-completion"];

    return (
      <>
        <Combobox
          label="Wage Type"
          name="wage_type"
          className={cx(styles.smallField, styles.field)}
          options={compensationTypes}
        />
        <MoneyField
          label="Wage Value"
          name="wage_value"
          className={cx(styles.smallField, styles.field)}
        />
        <BonusesSubForm styles={styles} values={values} />
      </>
    );
  }
};

export const BenefitsStep = {
  label: "Benefits",
  initialValues: { benefits_prefabbed: [], benefits_description: "" },
  validationSchema: yup.object().shape({}),
  Fields: () => {
    const styles = useStyles();
    const prefabbedBenefitOptions = [
      "401k matching",
      "Free food",
      "Medical insurance",
      "Dental insurance"
    ];

    return (
      <>
        <CheckboxArrayField
          styles={styles}
          options={prefabbedBenefitOptions}
          name="benefits_prefabbed"
        />
        <TextField
          multiline
          fullWidth
          rows="3"
          label="Other benefits (eg. paid time off, parental leave, etc...)"
          name="benefits_description"
          className={cx(styles.smallField, styles.field)}
        />
      </>
    );
  }
};

export const AcceptanceStep = {
  label: "Acceptance",
  initialValues: { extended: new Date().getTime(), accepted: "" },
  validationSchema: yup.object().shape({
    extended: yup
      .number()
      .typeError("Invalid Date")
      .required(),
    accepted: yup.string().required("Required")
  }),
  Fields: () => {
    const styles = useStyles();
    const acceptedOptions = ["Yes", "No"];

    return (
      <>
        <DatePicker
          label="Date Extended"
          name="extended"
          className={cx(styles.smallField, styles.field)}
        />
        <Combobox
          label="Accepted"
          name="accepted"
          className={cx(styles.smallField, styles.field)}
          options={acceptedOptions}
        />
      </>
    );
  }
};
