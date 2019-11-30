import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../../Shared/FormPage";
import IntroDialog from "./IntroDialog";
import HasOfferDialog from "./HasOfferDialog";
import ThankYouDialog from "./ThankYouDialog";
import AddStudentForm from "../AddStudent/AddStudentForm";
import AddOfferForm from "../AddOffer/AddOfferForm";

const EmailFlowPage = () => {
  const [result, setResult] = React.useState({});
  const [idx, setIdx] = React.useState(0);
  const [navigate, setNavigate] = React.useState(false);

  const handleClose = () => {
    console.log(result);
    setNavigate(true);
  };

  const handleFormSubmit = (id, data, forward = true) => {
    const direction = forward ? 1 : -1;
    switch (id) {
      case "intro":
        setIdx(idx + direction);
        break;
      case "add-student":
        setIdx(idx + direction);
        setResult({ ...result, student: data });
        break;
      case "has-offer":
        data ? setIdx(idx + direction) : handleClose();
        break;
      case "add-offer":
        setIdx(idx + direction);
        setResult({ ...result, offer: data });
        break;
      case "thanks":
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
        {idx === 0 && (
          <IntroDialog onSubmit={() => handleFormSubmit("intro")} />
        )}
        {idx === 1 && (
          <AddStudentForm
            onSubmit={student => handleFormSubmit("add-student", student)}
          />
        )}
        {idx === 2 && (
          <HasOfferDialog
            onSubmit={hasOffer => handleFormSubmit("has-offer", hasOffer)}
          />
        )}
        {idx === 3 && (
          <AddOfferForm
            onSubmit={offer => handleFormSubmit("add-offer", offer)}
          />
        )}
        {idx === 4 && (
          <ThankYouDialog onSubmit={() => handleFormSubmit("thanks")} />
        )}
      </FormPage>
    </>
  );
};

export default EmailFlowPage;
