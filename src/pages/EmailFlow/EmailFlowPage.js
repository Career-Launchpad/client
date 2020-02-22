import React from "react";
import { Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import FormPage from "../../components/FormPage";
import AddStudentForm from "../AddStudent/AddStudentForm";
import AddOfferForm from "../AddOffer/AddOfferForm";
import Dialog from "./Dialog";
import { makeStyles, Typography } from "@material-ui/core";

const INTRO_MD = `
Career Services is looking to help students to get great jobs and internships. 

This survey will ask you for some information about your job hunt. 

It should take **about than 5 minutes to complete**.

By continuing you agree to our [privacy policy](https://meetprospect.now.sh/privacy).
`;

const HAS_OFFERS_MD = `
If not, that's okay! We're here to help you get connected with Career Services to get the job you want.
`;

const useStyles = makeStyles(() => ({
  paper: {
    width: "100%",
    maxWidth: "42rem",
    padding: "2rem",
    margin: "auto",
    marginTop: "15vmin",
    marginBottom: "10vh",
    display: "flex",
    flexDirection: "column"
  }
}));

const EmailFlowPage = () => {
  const styles = useStyles();
  const [activeStep, setActiveStep] = React.useState(4);
  const [navigate, setNavigate] = React.useState(false);

  const steps = [
    {
      label: "What is this?",
      content: (
        <Dialog
          onSubmit={() => setActiveStep(1)}
          prompt={INTRO_MD}
          submitText="Begin"
        />
      )
    },
    {
      label: "Have you received any offers?",
      content: (
        <Dialog
          onSubmit={yes => setActiveStep(yes ? 2 : 4)}
          prompt={HAS_OFFERS_MD}
          submitText="Yes"
          cancelText="No"
        />
      )
    },
    {
      label: "Tell us about your offer!",
      content: (
        <AddOfferForm
          onSubmit={offer => {
            console.log(offer);
            setActiveStep(3);
          }}
        />
      )
    },
    {
      label: "Any other offers?",
      content: (
        <Dialog
          onSubmit={yes => setActiveStep(yes ? 2 : 4)}
          prompt="By entering all of the offers that you have received, even the ones that you have not accepted, you help future students to make better decisions."
          submitText="Yes"
          cancelText="No"
        />
      )
    },
    {
      label: "Tell us about yourself!",
      content: (
        <AddStudentForm
          onSubmit={student => {
            console.log(student);
            setActiveStep(5);
          }}
        />
      )
    },
    {
      label: "Finish",
      content: (
        <Dialog
          onSubmit={() => setNavigate(true)}
          prompt="Thank you! Your time will help your school to better serve their students"
          submitText="Finish"
        />
      )
    }
  ];

  return (
    <>
      {navigate && <Redirect to="/" />}
      <FormPage onClose={() => setNavigate(true)} className={styles.stepper}>
        <Paper className={styles.paper}>
          {steps
            .filter((_, i) => i === activeStep)
            .map(({ label, content }) => (
              <div key={label}>
                {<Typography variant="h5">{label}</Typography>}
                {content}
              </div>
            ))}
        </Paper>
      </FormPage>
    </>
  );
};

export default EmailFlowPage;
