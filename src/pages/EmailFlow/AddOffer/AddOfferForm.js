import React from "react";
import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

import {
  PositionStep,
  CompanyStep,
  CompensationStep,
  BenefitsStep,
  AcceptanceStep
} from "./AddOfferSteps";
import StepperForm from "../../../components/formik/StepperForm";
import { useAuth } from "../../../utils/auth";
import { useEnvironment } from "../../../utils/environment";

const commit = (input, environment, callback) => {
  commitMutation(environment, {
    mutation: graphql`
      mutation AddOfferForm_Mutation($input: createOfferInput!) {
        offer(offer: $input) {
          id
        }
      }
    `,
    variables: { input },
    onCompleted: res => callback(res),
    onError: err => callback({}, err)
  });
};

const steps = [
  PositionStep,
  CompanyStep,
  CompensationStep,
  BenefitsStep,
  AcceptanceStep
];

const AddOfferForm = ({ onSubmit }) => {
  const environment = useEnvironment();
  const { user } = useAuth();

  const handleSubmit = (values, { setSubmitting }) => {
    const selectedBenefits = values.benefits_prefabbed;
    delete values.benefits_prefabbed;
    const newOffer = {
      ...values,
      student_id: user.uid,
      extended: String(values.extended),
      accepted: values.accepted === "Yes",
      benefits_description:
        selectedBenefits.length > 0
          ? `${selectedBenefits.join(". ")}. ${values.benefits_description}`
          : values.benefits_description
    };
    commit(newOffer, environment, (res, err) => {
      setSubmitting(false);
      if (err) {
        return;
      }
      onSubmit(res);
    });
  };

  return <StepperForm onSubmit={handleSubmit} steps={steps} />;
};

export default AddOfferForm;
