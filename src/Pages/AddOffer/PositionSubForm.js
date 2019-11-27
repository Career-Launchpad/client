import React from "react";
import * as cx from "classnames";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";

const positionTypes = ["Full time", "Part time", "Internship", "Contractor"];

const PositionSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Position
      </Typography>
      <TextField
        label="Position Title"
        name="title"
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormControl
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
      >
        <InputLabel>Position Type</InputLabel>
        <Select
          name="type"
          value={values.type}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {positionTypes.map(type => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Company"
        name="company"
        margin="normal"
        variant="filled"
        fullWidth
        value={values.company}
        className={styles.field}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        label="City"
        name="location.city"
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        value={values.location.city}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        label="State"
        name="location.state"
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        value={values.location.state}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        label="Country"
        name="location.country"
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        value={values.location.country}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
};

export default PositionSubForm;
