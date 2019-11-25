import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
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
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <AddOfferForm onSubmit={handleFormSubmit} />
        </MuiPickersUtilsProvider>
      </FormPage>
    </>
  );
};

export default AddOfferPage;
