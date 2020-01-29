import React from "react";
import { useField } from "formik";
import { TextField as MuiTextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutocompleteTextField = ({
  className,
  name,
  label,
  options,
  freeSolo
}) => {
  const [field, meta, helpers] = useField(name);
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";
  return (
    <Autocomplete
      className={className}
      margin="normal"
      freeSolo={freeSolo}
      filterOptions={o => o.filter(o => o.startsWith(field.value))}
      disableClearable
      options={options}
      onChange={(e, v) => helpers.setValue(v)}
      onBlur={field.onBlur}
      name={field.name}
      value={field.value}
      renderInput={params => (
        <MuiTextField
          {...params}
          label={label}
          fullWidth
          margin="none"
          variant="filled"
          color="secondary"
          name={field.name}
          value={field.value}
          helperText={helperText}
          error={error}
          onChange={field.onChange}
          onBlur={(e, value) => {
            if (!freeSolo && !options.includes(field.value)) {
              helpers.setValue("");
              helpers.setTouched(true);
            }
            field.onBlur(e);
          }}
        />
      )}
    />
  );
};

export default AutocompleteTextField;
