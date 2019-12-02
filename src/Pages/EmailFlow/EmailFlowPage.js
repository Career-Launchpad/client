import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../../Shared/FormPage";
import IntroDialog from "./IntroDialog";
import HasOfferDialog from "./HasOfferDialog";
import ThankYouDialog from "./ThankYouDialog";
import AddStudentForm from "../AddStudent/AddStudentForm";
import AddOfferForm from "../AddOffer/AddOfferForm";

const Pages = [
  { name: "IntroDialog", component: IntroDialog },
  { name: "AddStudentForm", component: AddStudentForm },
  { name: "HasOfferDialog", component: HasOfferDialog },
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
    console.log(result);
    setNavigate(true);
  };

  const handleFormSubmit = (id, data, forward = true) => {
    switch (id) {
      case "IntroDialog":
        forward ? setCurrent("AddStudentForm") : handleClose();
        break;
      case "AddStudentForm":
        setResult({ ...result, student: { ...result.student, ...data } });
        setCurrent(forward ? "HasOfferDialog" : "IntroDialog");
        break;
      case "HasOfferDialog":
        setCurrent(data ? "AddOfferForm" : "ThankYouDialog");
        break;
      case "AddOfferForm":
        setResult({ ...result, offer: { ...result.offer, ...data } });
        setCurrent(forward ? "ThankYouDialog" : "HasOfferDialog");
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
        {Pages.filter(page => page.name === current).map((page, i) => (
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
