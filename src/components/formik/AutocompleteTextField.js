import React, { useState } from "react";
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
  const [internalValue, setInternalValue] = useState(field.value);
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";
  const handleChange = e => {
    setInternalValue(e.target.value);
  };
  const handleBlur = e => {
    if (options.includes(internalValue) || internalValue === "" || freeSolo) {
      helpers.setValue(internalValue);
    } else {
      setInternalValue("");
    }
    helpers.setTouched(true);
    field.onBlur(e);
    console.log(internalValue);
  };
  console.log({ error });
  return (
    <Autocomplete
      className={className}
      margin="normal"
      freeSolo={freeSolo}
      filterOptions={o => o.filter(o => o.startsWith(internalValue))}
      disableClearable
      options={options}
      onChange={(e, v) => helpers.setValue(v)}
      onBlur={field.onBlur}
      name={field.name}
      value={internalValue}
      renderInput={params => (
        <MuiTextField
          {...params}
          label={label}
          fullWidth
          margin="none"
          variant="filled"
          color="secondary"
          name={field.name}
          value={internalValue}
          helperText={helperText}
          error={error}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    />
  );
};

export default AutocompleteTextField;
