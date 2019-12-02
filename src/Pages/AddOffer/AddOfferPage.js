import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../../Shared/FormPage";
import AddOfferForm from "./AddOfferForm";

const AddOfferPage = () => {
  const [navigate, setNavigate] = React.useState(false);

  const handleClose = () => {
    setNavigate(true);
  };

  const handleFormSubmit = offer => {
    console.log(offer);
    handleClose();
  };

  return (
    <>
      {navigate && <Redirect to="/" />}
      <FormPage onClose={handleClose}>
        <AddOfferForm onSubmit={handleFormSubmit} />
      </FormPage>
    </>
  );
};

export default AddOfferPage;
