import React from "react";
import { useField } from "formik";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DatePickerField = ({form, field, ...other }) => {
  const [config, meta] = useField(field.name);
  const error = !!meta.touched && !!meta.error;
  const currentError = meta.error;
  const helperText = error ? meta.error : " ";

  return (
    <KeyboardDatePicker
      autoOk
      name={config.name}
      value={config.value}
      variant="inline"
      inputVariant="filled"
      format="MM/dd/yyyy"
      margin="normal"
      disableToolbar
      helperText={helperText}
      error={error}
      onError={error => {
        // handle as a side effect
        if (error && error !== currentError) {
          form.setFieldError(field.name, error);
        }
      }}
      // if you are using custom validation schema you probably want to pass `true` as third argument
      onChange={date => form.setFieldValue(config.name, date.getTime(), true)}
      onBlur={config.onBlur}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
      {...other}
    />
  );
};

export default DatePickerField;
