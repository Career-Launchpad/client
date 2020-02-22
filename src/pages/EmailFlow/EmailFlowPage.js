import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import FormPage from "../../components/FormPage";
import AddStudentForm from "./AddStudent/AddStudentForm";
import AddOfferForm from "./AddOffer/AddOfferForm";
import Dialog from "./Dialog";

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
  const history = useHistory();
  const activeStep = history?.location?.state?.index || 0;

  const handleIndexChange = index => {
    history.push("/email", { index });
  };

  const steps = [
    {
      label: "What is this?",
      content: (
        <Dialog
          onSubmit={() => handleIndexChange(1)}
          prompt={INTRO_MD}
          submitText="Begin"
        />
      )
    },
    {
      label: "Have you received any offers?",
      content: (
        <Dialog
          onSubmit={yes => handleIndexChange(yes ? 2 : 4)}
          prompt={HAS_OFFERS_MD}
          submitText="Yes"
          cancelText="No"
        />
      )
    },
    {
      label: "Tell us about your offer!",
      content: <AddOfferForm onSubmit={() => handleIndexChange(3)} />
    },
    {
      label: "Any other offers?",
      content: (
        <Dialog
          onSubmit={yes => handleIndexChange(yes ? 2 : 4)}
          prompt="By entering all of the offers that you have received, even the ones that you have not accepted, you help future students to make better decisions."
          submitText="Yes"
          cancelText="No"
        />
      )
    },
    {
      label: "Tell us about yourself!",
      content: <AddStudentForm onSubmit={() => handleIndexChange(5)} />
    },
    {
      label: "Finished!",
      content: (
        <Dialog prompt="Thank you! Your time will help your school to better serve you!" />
      )
    }
  ];

  return (
    <>
      <FormPage>
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
