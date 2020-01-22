import React from "react";
import { useField } from "formik";
import { TextField as MuiTextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  noMargin: {
    margin: 0
  }
}));

const AutocompleteTextField = props => {
  const [field, meta] = useField(props);
  const classes = useStyles();
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";
  return (
    <Autocomplete
      className={props.className}
      margin="normal"
      freeSolo
      disableClearable
      options={[
        "Brevium",
        "Qualtrics",
        "Simplifile",
        "Lucid",
        "Chief Architect",
        "Proofpoint"
      ]}
      onChange={field.onChange}
      name={field.name}
      value={field.value}
      renderInput={params => (
        <MuiTextField
          {...params}
          className={classes.noMargin}
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
