import React from "react";
import * as cx from "classnames";
import { useField } from "formik";

import { FieldArray } from "formik";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const CheckboxArrayField = ({ styles, name, options }) => {
  const [field] = useField(name);

  return (
    <FieldArray
      name={name}
      render={({ remove, push }) => (
        <>
          {Array.from(options, (o, i) => (
            <FormControlLabel
              key={`${name}_option_${i}`}
              className={cx(styles.field, styles.smallField)}
              control={
                <Checkbox
                  checked={field.value.includes(o)}
                  onChange={(e, v) => {
                    if (v) {
                      push(o);
                    } else {
                      const index = field.value.indexOf(o);
                      remove(index);
                    }
                  }}
                />
              }
              label={o}
            />
          ))}
        </>
      )}
    />
  );
};

export default CheckboxArrayField;
