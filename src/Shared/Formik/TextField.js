import React from "react";
import { useField } from "formik";
import { TextField as MuiTextField } from "@material-ui/core";

const TextField = props => {
  const [field, meta] = useField(props);
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";
  return (
    <MuiTextField
      name={field.name}
      value={field.value}
      margin="normal"
      variant="filled"
      color="secondary"
      error={error}
      helperText={helperText}
      onBlur={field.onBlur}
      onChange={field.onChange}
      {...props}
    >
      {props.children}
    </MuiTextField>
  );
};

export default TextField;
