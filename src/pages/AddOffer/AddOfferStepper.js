import React, { useState } from "react";
import cx from "classnames";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepContent from "@material-ui/core/StepContent";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../utils/environment";

import BenefitsSubForm from "./BenefitsSubForm";
import AcceptanceSubForm from "./AcceptanceSubForm";
import BonusesSubForm from "./BonusesSubForm";

import TextField from "../../components/formik/TextField";
import MoneyField from "../../components/formik/MoneyField";
import AutocompleteTextField from "../../components/formik/AutocompleteTextField";

const useStyles = makeStyles(theme => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
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

const positionTypes = ["Full time", "Part time", "Internship", "Contractor"];
const compensationTypes = ["Salary", "Hourly", "On-completion"];

const AddOfferStepper = ({ values, handleChange, handleBlur, handleSubmit }) => {
  const styles = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      label: "Position",
      content: (
        <>
          <TextField label="Position Title" name="position_title" className={cx(styles.smallField, styles.field)} />
          <TextField select label="Position Type" name="position_type" className={cx(styles.smallField, styles.field)}>
            {positionTypes.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </>
      )
    },
    {
      label: "Company",
      content: (
        <>
          <QueryRenderer
            environment={environment}
            query={query}
            render={({ props }) => {
              let loading = !props;
              return (
                <AutocompleteTextField
                  label="Company"
                  name="company_name"
                  className={cx(styles.smallField, styles.field)}
                  options={loading ? [] : props.store.company_names}
                />
              );
            }}
          />
          <TextField label="City" name="location.city" className={cx(styles.smallField, styles.field)} />
          <TextField label="State" name="location.state" className={cx(styles.smallField, styles.field)} />
          <TextField label="Country" name="location.country" className={cx(styles.smallField, styles.field)} />
        </>
      )
    },
    {
      label: "Compensation",
      content: (
        <>
          <TextField select label="Wage Type" name="wage_type" className={cx(styles.smallField, styles.field)}>
            {compensationTypes.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <MoneyField label="Wage Value" name="wage_value" className={cx(styles.smallField, styles.field)} />
          <BonusesSubForm styles={styles} values={values} handleBlur={handleBlur} handleChange={handleChange} />
        </>
      )
    },
    {
      label: "Benefits",
      content: <BenefitsSubForm styles={styles} values={values} handleBlur={handleBlur} handleChange={handleChange} />
    },
    {
      label: "Finish",
      content: <AcceptanceSubForm styles={styles} values={values} handleBlur={handleBlur} handleChange={handleChange} />
    }
  ];

  const getActionButton = index => {
    const isFinish = index === steps.length - 1;
    const handleClick = isFinish ? handleSubmit : () => setActiveStep(index + 1);
    return (
      <Button
        variant="contained"
        color="primary"
        type={isFinish ? "submit" : "button"}
        className={styles.buttonSubmit}
        onClick={handleClick}
      >
        {isFinish ? "finish" : "next"}
      </Button>
    );
  };

  return (
    <Stepper nonLinear activeStep={activeStep} orientation="vertical">
      {steps.map(({ label, content }, index) => (
        <Step key={label}>
          <StepButton onClick={() => setActiveStep(index)}>{label}</StepButton>
          <StepContent>
            <div className={styles.content}>{content}</div>
            {getActionButton(index)}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default AddOfferStepper;

const query = graphql`
  query AddOfferStepper_Query {
    store {
      company_names
    }
  }
`;
