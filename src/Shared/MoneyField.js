import React from "react";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";

const MoneyField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];
  return (
    <NumberFormat
      name={field.name}
      value={field.value}
      variant="filled"
      margin="normal"
      prefix="$"
      thousandSeparator
      customInput={TextField}
      onValueChange={({ floatValue }) =>
        form.setFieldValue(field.name, floatValue)
      }
      onBlur={field.onBlur}
      onError={error => {
        // handle as a side effect
        if (error && error !== currentError) {
          form.setFieldError(field.name, error);
        }
      }}
      {...other}
    />
  );
};

export default MoneyField;
