import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";

const TextField = ({ field, form, children, ...other }) => {
  const error = !!form.touched[field.name] && !!form.errors[field.name];
  const helperText = error ? form.errors[field.name] : " ";
  return (
    <MuiTextField
      name={field.name}
      value={field.value}
      margin="normal"
      variant="filled"
      error={error}
      helperText={helperText}
      onBlur={field.onBlur}
      onChange={field.onChange}
      {...other}
    >
      {children}
    </MuiTextField>
  );
};

export default TextField;
