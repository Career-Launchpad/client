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
  const [field, meta, helpers] = useField(props.name);
  const classes = useStyles();
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";
  return (
    <Autocomplete
      className={props.className}
      margin="normal"
      freeSolo
      filterOptions={(o) => o.filter(o => o.startsWith(field.value))}
      disableClearable
      options={[
        "Brevium",
        "Qualtrics",
        "Simplifile",
        "Lucid",
        "Plaid",
        "Podium",
        "Chief Architect",
        "Proofpoint"
      ]}
      onChange={(e, v) => helpers.setValue(v)}
      onBlur={field.onBlur}
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
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
      {...props}
    />
  );
};

export default AutocompleteTextField;
