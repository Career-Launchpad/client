import React from "react";
import { Redirect } from "react-router-dom";

import AddStudentForm from "./AddStudentForm";
import FormPage from "../../components/FormPage";

const AddStudentPage = () => {
  const [navigate, setNavigate] = React.useState(false);

  const handleClose = () => {
    setNavigate(true);
  };

  const handleFormSubmit = student => {
    handleClose();
  };

  return (
    <>
      {navigate && <Redirect to="/" />}{" "}
      <FormPage onClose={handleClose}>
        <AddStudentForm onSubmit={handleFormSubmit} />
      </FormPage>
    </>
  );
};

export default AddStudentPage;
