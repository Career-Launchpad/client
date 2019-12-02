import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";

const TextField = ({ field, form, children, ...other }) => {
  const { errors, touched } = field.name.split(".").reduce((obj, level) => {
    let [attribute, index] = level.split("[");
    const errors = obj.errors ? obj.errors[attribute] : "";
    const touched = obj.touched ? obj.touched[attribute] : false;
    if (index) {
      index = Number(index.remove("]"));
      return { errors: errors[index], touched: touched[index] };
    }
    return { errors, touched };
  }, form);
  const error = !!touched && !!errors;
  const helperText = error ? errors : " ";
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
