import React from "react";
import { commitMutation } from "react-relay";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import { PersonalStep, AcademicStep, DemographicStep } from "./AddStudentSteps";
import StepperForm from "../../../components/formik/StepperForm";
import { useAuth } from "../../../utils/auth";
import { useEnvironment } from "../../../utils/environment";

const commit = (input, environment, callback) => {
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

const steps = [PersonalStep, AcademicStep, DemographicStep];

const AddStudentForm = ({ onSubmit }) => {
  const environment = useEnvironment();
  const { user } = useAuth();

  const handleSubmit = (values, { setSubmitting }) => {
    const newStudent = {
      ...values,
      id: user.uid
    };
    commit(newStudent, environment, (res, err) => {
      setSubmitting(false);
      if (err) {
        return;
      }
      onSubmit(res);
    });
  };
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ student_id: user.uid }}
      render={({ props }) => (
        <StepperForm onSubmit={handleSubmit} steps={steps} initialValues={props?.store?.student} />
      )}
    />
  );
};

export default AddStudentForm;

const query = graphql`
  query AddStudentForm_Query($student_id: String) {
    store {
      student(id: $student_id) {
        id
        firstname
        lastname
        major
        academic_year
        gender
        ethnicity
      }
    }
  }
`;
