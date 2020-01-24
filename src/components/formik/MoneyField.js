import React from "react";
import { useField } from "formik";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";

const MoneyField = props => {
  const [field, meta] = useField(props);
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";
  return (
    <NumberFormat
      name={field.name}
      value={field.value}
      variant="filled"
      margin="normal"
      color="secondary"
      prefix="$"
      thousandSeparator
      customInput={TextField}
      error={error}
      helperText={helperText}
      onValueChange={({ floatValue }) => {
        field.onChange({
          target: {
            name: field.name,
            value: floatValue
          }
        });
      }}
      onBlur={field.onBlur}
      {...props}
    />
  );
};

export default MoneyField;
