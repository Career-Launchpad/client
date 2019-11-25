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
import moment from "moment";

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
    margin: "10px"
  },
  smallField: {
    minWidth: 260,
    flexGrow: 1
  },
  button: {
    marginLeft: "auto",
    marginRight: "10px"
  }
}));

const studentSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  major: yup.string().required("Required"),
  academicYear: yup.string().required("Required")
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
          title: "",
          type: "",
          company: "",
          location: {
            city: "",
            state: "",
            country: ""
          },
          compensation: {
            type: "",
            value: "",
            bonuses: []
          },
          extended: moment(),
          deadline: moment()
        }}
        validationSchema={studentSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          dirty,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <PositionSubForm
              styles={styles}
              values={values}
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
              className={styles.button}
              disabled={!dirty || !isValid || isSubmitting}
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
