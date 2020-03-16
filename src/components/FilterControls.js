import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import cx from "classnames";

const FilterControl = ({ filter, onDelete, className }) => {
  return (
    <div className={className}>
      <span>{filter.field}</span>
      <span>{filter.comp}</span>
      <span>{filter.value}</span>
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    margins: {
      margin: "10px"
    },
    control: {
      marginBottom: "10px"
    },
    filterOn: {
      color: theme.palette.primary.main
    },
    right: {
      float: "right"
    }
  };
});

const FilterControls = ({ onChange, fieldNames }) => {
  const classes = useStyles();

  const [filters, setFilters] = useState([]);
  //{ field: "wage_type", value: "Hourly", comp: "=" }

  const [field, setField] = useState("");
  const [value, setValue] = useState("");
  const [comp, setComp] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const update = () => {
    onChange(filters);
  };

  const remove = filter => {
    setFilters(filters.filter(i => i !== filter));
  };

  const add = () => {
    setFilters([...filters, { field: field, comp: comp, value: value }]);
    setField("");
    setValue("");
    setComp("");
  };

  const clear = () => {
    setFilters([]);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const filtersOn = filters && filters.length > 0;

  console.log(filters);

  return (
    <>
      <Button
        className={
          filtersOn
            ? cx(classes.control, classes.right, classes.filterOn)
            : cx(classes.control, classes.right)
        }
        variant="contained"
        onClick={handleClick}
      >
        {filtersOn ? "Filters On" : "Filter"}
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        {filters.map((f, i) => (
          <FilterControl
            className={classes.margins}
            key={i}
            filter={f}
            onDelete={() => remove(f)}
          />
        ))}
        <div>
          <TextField
            className={classes.margins}
            variant="filled"
            label="Field"
            name="Field"
            value={field}
            size="small"
            onChange={e => setField(e.target.value)}
          ></TextField>
          <TextField
            className={classes.margins}
            variant="filled"
            label="Comparator"
            name="Comparator"
            value={comp}
            size="small"
            onChange={e => setComp(e.target.value)}
          ></TextField>
          <TextField
            className={classes.margins}
            variant="filled"
            label="Value"
            name="Value"
            value={value}
            size="small"
            onChange={e => setValue(e.target.value)}
          ></TextField>
          <Button onClick={add} disabled={!value || !comp || !field}>
            Add Filter
          </Button>
          {filtersOn && (
            <>
              <Divider></Divider>
              <Button
                className={cx(classes.right, classes.margins)}
                onClick={clear}
                endIcon={<CloseIcon />}
              >
                Clear Filters
              </Button>
            </>
          )}
        </div>
      </Popover>
    </>
  );
};

export default FilterControls;
