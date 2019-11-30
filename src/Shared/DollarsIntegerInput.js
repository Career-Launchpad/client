import React from "react";
import NumberFormat from 'react-number-format';

function DollarsIntegerInput({ inputRef, onChange, ...other }) {

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

export default DollarsIntegerInput;
