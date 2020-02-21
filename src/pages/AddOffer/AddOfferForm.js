import React from "react";
import { commitMutation } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { Formik } from "formik";
import * as yup from "yup";

import AddOfferStepper from "./AddOfferStepper";
import environment from "../../utils/environment";
import { useContext } from "react";
import { AuthContext } from "../../utils/auth";

const offerSchema = yup.object().shape({
  student_id: yup.string().required("Required"),
  position_title: yup.string().required("Required"),
  position_type: yup.string().required("Required"),
  company_name: yup.string().required("Required"),
  location: yup.object().shape({
    city: yup.string().required("Required"),
    state: yup.string(),
    country: yup.string().required("Required")
  }),
  wage_type: yup.string().required("Required"),
  wage_value: yup.string().required("Required"),
  bonuses: yup.array().of(
    yup.object().shape({
      type: yup.string().required("Required"),
      value: yup.string().required("Required"),
      repeat_interval: yup.string(),
      repeat_count: yup.number(),
      one_time: yup.bool(),
      description: yup.string()
    })
  ),
  extended: yup.number().typeError("Invalid Date"),
  deadline: yup.number().typeError("Invalid Date"),
  accepted: yup.string().required("Required")
});

const commit = (input, callback) => {
  commitMutation(environment, {
    mutation: graphql`
      mutation AddOfferForm_Mutation($input: createOfferInput!) {
        offer(offer: $input) {
          id
          position_type
          position_title
          wage_value
          wage_type
          location {
            city
            state
            country
          }
        }
      }
    `,
    variables: { input: { ...input, accepted: input.accepted === "Yes" } },
    onCompleted: res => callback(res),
    onError: err => callback({}, err)
  });
};

const AddOfferForm = ({ onSubmit }) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (values, { setSubmitting }) => {
    const selectedBenefits = values.benefits_prefabbed;

    const newOffer = {
      ...values,
      extended: String(values.extended),
      deadline: String(values.deadline),
      benefits_prefabbed: undefined,
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
  return (
    <Formik
      initialValues={{
        student_id: user?.uid,
        position_title: "",
        position_type: "",
        company_name: "",
        location: {
          city: "",
          state: "",
          country: ""
        },
        wage_type: "",
        wage_value: "",
        bonuses: [],
        benefits_prefabbed: [],
        benefits_description: "",
        extended: new Date().getTime(),
        deadline: new Date().getTime(),
        accepted: ""
      }}
      validationSchema={offerSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...rest }) => (
        <form onSubmit={handleSubmit}>
          <AddOfferStepper {...rest} />
        </form>
      )}
    </Formik>
  );
};

export default AddOfferForm;
