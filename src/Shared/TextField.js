import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";

const TextField = ({ field, form, ...other }) => {
  console.log(form);
  return (
    <MuiTextField
      name={field.name}
      value={field.value}
      margin="normal"
      variant="filled"
      helperText={form.touched[field.name] ? form.errors[field.name] : " "}
      error={!!form.touched[field.name] && !!form.errors[field.name]}
      onBlur={field.onBlur}
      onChange={field.onChange}
      {...other}
    />
  );
};

export default TextField;
