import React from "react";
import { useField } from "formik";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DatePicker = props => {
  const [field, meta] = useField(props);
  const error = !!meta.touched && !!meta.error;
  const helperText = error ? meta.error : " ";
  return (
    <KeyboardDatePicker
      autoOk
      name={field.name}
      value={field.value}
      variant="inline"
      inputVariant="filled"
      format="MM/dd/yyyy"
      margin="normal"
      color="secondary"
      disableToolbar
      helperText={helperText}
      error={error}
      onChange={date =>
        field.onChange({
          target: {
            value: date.getTime(),
            name: field.name
          }
        })
      }
      onBlur={field.onBlur}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
      {...props}
    />
  );
};

export default DatePicker;
