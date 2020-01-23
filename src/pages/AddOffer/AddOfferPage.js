import React from "react";
import { Redirect } from "react-router-dom";

import Layout from "../../components/Layout";
import FormPage from "../../components/FormPage";
import AddOfferForm from "./AddOfferForm";

const AddOfferPage = () => {
  const [navigate, setNavigate] = React.useState(false);

  const handleClose = () => {
    setNavigate(true);
  };

  const handleFormSubmit = offer => {
    handleClose();
  };

  return (
    <>
      {navigate && <Redirect to="/" />}
      <Layout>
        <FormPage onClose={handleClose}>
          <AddOfferForm onSubmit={handleFormSubmit} />
        </FormPage>
      </Layout>
    </>
  );
};

export default AddOfferPage;
