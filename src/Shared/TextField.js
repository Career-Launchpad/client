import React from "react";
import { useField } from "formik";
import { TextField as MuiTextField } from "@material-ui/core";

const TextField = ({ field, children, ...other }) => {
  const [config, meta] = useField(field.name);
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";
  return (
    <MuiTextField
      name={config.name}
      value={config.value}
      margin="normal"
      variant="filled"
      error={error}
      helperText={helperText}
      onBlur={config.onBlur}
      onChange={config.onChange}
      {...other}
    >
      {children}
    </MuiTextField>
  );
};

export default TextField;
