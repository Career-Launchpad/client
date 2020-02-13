import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../../components/FormPage";
import AddStudentForm from "../AddStudent/AddStudentForm";
import AddOfferForm from "../AddOffer/AddOfferForm";
import Dialog from "./Dialog";

const introPrompt = `
Your school has requested that you input information regarding your job hunt. Please click "BEGIN" to continue.

Your information will be used in accordance with our [Privacy Policy](https://meetprospect.now.sh/privacy).
`;

const IntroDialog = ({ onSubmit }) => (
  <Dialog onSubmit={onSubmit} prompt={introPrompt} submitText="Begin" />
);

const HasOfferDialog = ({ onSubmit }) => (
  <Dialog
    onSubmit={onSubmit}
    prompt="Have you received an offer as part of your job search so far?"
    submitText="Yes"
    cancelText="No"
  />
);

const HasMoreDialog = ({ onSubmit }) => (
  <Dialog
    onSubmit={onSubmit}
    prompt="Have you received any other offers?"
    submitText="Yes"
    cancelText="No"
  />
);

const ThankYouDialog = ({ onSubmit }) => (
  <Dialog
    onSubmit={onSubmit}
    prompt="Thank you! Your time will help your school to better serve their students"
    submitText="Finish"
  />
);

const Pages = [
  { name: "IntroDialog", component: IntroDialog },
  { name: "AddStudentForm", component: AddStudentForm },
  { name: "HasOfferDialog", component: HasOfferDialog },
  { name: "HasMoreDialog", component: HasMoreDialog },
  { name: "AddOfferForm", component: AddOfferForm },
  { name: "ThankYouDialog", component: ThankYouDialog }
];

const EmailFlowPage = () => {
  const [result, setResult] = React.useState({
    student: { college_id: "byu_cpms" }
  });
  const [current, setCurrent] = React.useState("IntroDialog");
  const [navigate, setNavigate] = React.useState(false);

  const handleClose = () => {
    setNavigate(true);
  };

  const handleFormSubmit = (id, data, forward = true) => {
    switch (id) {
      case "IntroDialog":
        forward ? setCurrent("AddStudentForm") : handleClose();
        break;
      case "AddStudentForm":
        setResult({
          ...result,
          student: { ...result.student, ...data.student }
        });
        setCurrent(forward ? "HasOfferDialog" : "IntroDialog");
        break;
      case "HasOfferDialog":
        setCurrent(data ? "AddOfferForm" : "ThankYouDialog");
        break;
      case "AddOfferForm":
        setResult({ ...result, offer: { ...result.offer, ...data.offer } });
        setCurrent(forward ? "HasMoreDialog" : "HasOfferDialog");
        break;
      case "HasMoreDialog":
        setCurrent(data ? "AddOfferForm" : "ThankYouDialog");
        break;
      case "ThankYouDialog":
        handleClose();
        break;
      default:
        console.log(`Unrecognized ${id}`);
    }
  };

  return (
    <>
      {navigate && <Redirect to="/" />}
      <FormPage onClose={handleClose}>
        {Pages.filter(page => page.name === current).map(page => (
          <page.component
            key={page.name}
            onSubmit={data => handleFormSubmit(page.name, data)}
          />
        ))}
      </FormPage>
    </>
  );
};

export default EmailFlowPage;
