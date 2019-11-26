import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DatePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];

  return (
    <KeyboardDatePicker
      autoOk
      name={field.name}
      value={field.value}
      variant="inline"
      inputVariant="filled"
      format="MM/dd/yyyy"
      margin="normal"
      disableToolbar
      onError={error => {
        // handle as a side effect
        if (error && error !== currentError) {
          form.setFieldError(field.name, error);
        }
      }}
      // if you are using custom validation schema you probably want to pass `true` as third argument
      onChange={date => form.setFieldValue(field.name, date, false)}
      onBlur={field.onBlur}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
      {...other}
    />
  );
};

export default DatePickerField;
