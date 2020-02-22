import React, { useState } from "react";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepContent from "@material-ui/core/StepContent";

const useStyles = makeStyles(theme => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }
}));

const StepperForm = ({ onSubmit, steps }) => {
  const styles = useStyles();
  const [allValues, setAllValues] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const handleSubmit = (values, bag, index) => {
    const newAllValues = { ...allValues, values };
    if (index !== steps.length - 1) {
      setAllValues(newAllValues);
      setActiveStep(index + 1);
      bag.setSubmitting(false);
      return;
    }
    onSubmit(newAllValues, bag);
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map(
        ({ label, Fields, initialValues, validationSchema }, index) => (
          <Step key={label}>
            <StepButton onClick={() => setActiveStep(index)}>
              {index === steps.length - 1 ? "Finish" : label}
            </StepButton>
            <StepContent>
              <Formik
                initialValues={{ ...initialValues, ...allValues }}
                validationSchema={validationSchema}
                onSubmit={(values, bag) => handleSubmit(values, bag, index)}
              >
                {({ handleSubmit, ...rest }) => (
                  <form onSubmit={handleSubmit} className={styles.content}>
                    <Fields {...rest} />
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className={styles.buttonSubmit}
                    >
                      {index === steps.length - 1 ? "finish" : "next"}
                    </Button>
                  </form>
                )}
              </Formik>
            </StepContent>
          </Step>
        )
      )}
    </Stepper>
  );
};

export default StepperForm;
