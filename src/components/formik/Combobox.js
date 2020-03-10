import React from "react";
import { Field, useField } from "formik";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Combobox = ({ className, name, label, options }) => {
  const [field, meta, helpers] = useField(name);
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";

  return (
    <Autocomplete
      disableClearable
      autoHighlight
      autoSelect
      id={name}
      className={className}
      name={name}
      options={options}
      getOptionLabel={option => option}
      defaultValue={field.value}
      onChange={(e, value) => {
        helpers.setValue(value);
      }}
      renderInput={params => (
        <Field
          component={TextField}
          {...params}
          name={name}
          label={label}
          variant="filled"
          fullWidth
          error={error}
          helperText={helperText}
          onBlur={field.onBlur}
        />
      )}
    />
  );
};

export default Combobox;
