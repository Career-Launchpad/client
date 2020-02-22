import React, { useContext } from "react";
import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import {
  PersonalFields,
  AcademicFields,
  DemographicFields
} from "./AddStudentFields";
import StepperForm from "../../components/formik/StepperForm";
import { AuthContext } from "../../utils/auth";
import environment from "../../utils/environment";

const commit = (input, callback) => {
  commitMutation(environment, {
    mutation: graphql`
      mutation AddStudentForm_Mutation($input: createStudentInput!) {
        student(student: $input) {
          id
        }
      }
    `,
    variables: { input },
    onCompleted: res => callback(res),
    onError: err => callback({}, err)
  });
};

const steps = [PersonalFields, AcademicFields, DemographicFields];

const AddStudentForm = ({ onSubmit }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (values, { setSubmitting }) => {
    const newStudent = {
      ...values,
      id: user.uid
    };
    commit(newStudent, (res, err) => {
      setSubmitting(false);
      if (err) {
        return;
      }
      onSubmit(res);
    });
  };
  return <StepperForm onSubmit={handleSubmit} steps={steps} />;
};

export default AddStudentForm;
