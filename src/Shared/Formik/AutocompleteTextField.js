import React from "react";
import { useField } from "formik";
import { TextField as MuiTextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutocompleteTextField = props => {
  const [field, meta] = useField(props);
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";
  return (
    <Autocomplete
      margin="normal"
      freeSolo
      disableClearable
      options={["Brevium", "Qualtrics", "Simplifile", "Lucid", "Chief Architect", "Proofpoint"]}
      onChange={field.onChange}
      name={field.name}
      value={field.value}
      renderInput={params => (
        <MuiTextField
          {...params}
          label={props.label}
          fullWidth
          margin="normal"
          variant="filled"
          color="secondary"
          name={field.name}
          value={field.value}
          helperText={helperText}
          error={error}
        />
      )}
      {...props}
    />
  );
};

export default AutocompleteTextField;
