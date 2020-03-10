import React, { useContext } from "react";
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
import { AuthContext } from "../../../utils/auth";
import environment from "../../../utils/environment";

const commit = (input, callback) => {
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
  const { user } = useContext(AuthContext);

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
    commit(newOffer, (res, err) => {
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
