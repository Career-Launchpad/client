import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as cx from "classnames";
import * as yup from "yup";

import PositionSubForm from "./PositionSubForm";
import CompensationSubForm from "./CompensationSubForm";
import AcceptanceSubForm from "./AcceptanceSubForm";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "0 -10px"
  },
  subtitle: {
    width: "100%",
    margin: "10px"
  },
  field: {
    margin: "5px 10px"
  },
  smallField: {
    minWidth: 260,
    flexGrow: 1
  },
  buttonSubmit: {
    marginLeft: "auto",
    marginRight: "10px",
    marginTop: "10px"
  }
}));

const offerSchema = yup.object().shape({
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
  extended: yup.number().typeError("Required"),
  deadline: yup.number().typeError("Required"),
  accepted: yup.bool()
});

const AddOfferForm = ({ onSubmit }) => {
  const styles = useStyles();
  return (
    <>
      <Typography variant="h4">Add Offer</Typography>
      <Typography variant="body1">
        Please enter as much information as you can, as accurately as possible.
        This will help your school know best how to help you.
      </Typography>
      <Formik
        initialValues={{
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
          extended: new Date().getTime(),
          deadline: new Date().getTime(),
          accepted: false
        }}
        validationSchema={offerSchema}
        onSubmit={(values, { isValid, setSubmitting }) => {
          setTimeout(() => {
            if (isValid) {
              onSubmit(values);
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <PositionSubForm
              styles={styles}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <CompensationSubForm
              styles={styles}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <AcceptanceSubForm
              styles={styles}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <div className={cx(styles.smallField, styles.field)}></div>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={styles.buttonSubmit}
              disabled={isSubmitting}
            >
              done
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddOfferForm;
