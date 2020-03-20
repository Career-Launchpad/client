import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import cx from "classnames";

const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    margins: {
      margin: "10px"
    },
    marginsVertical: {
      margin: "10px 0 10px 0"
    },
    control: {
      marginBottom: "10px"
    },
    filterOn: {
      color: theme.palette.primary.main
    },
    right: {
      float: "right"
    },
    row: {
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    filterEntryColumn: {
      flex: 1,
      textAlign: "center"
    },
    selectField: {
      minWidth: "220px"
    }
  };
});

const operators = [
  {
    name: "Equals",
    value: "="
  },
  {
    name: "Less than",
    value: "<"
  },
  {
    name: "Greater than",
    value: ">"
  },
  {
    name: "Less than or equal to",
    value: "<="
  },
  {
    name: "Greater than or equal to",
    value: ">="
  }
];

const FilterControls = ({ onChange, columnInfo, filters }) => {
  if (!Array.isArray(filters)) {
    console.error("FilterControls expects filters to be an array");
  }

  const classes = useStyles();

  const [field, setField] = useState("");
  const [value, setValue] = useState("");
  const [comp, setComp] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const remove = filter => {
    onChange(filters.filter(i => i !== filter));
  };

  const add = () => {
    onChange([...filters, { field: field.id, comp: comp, value: value }]);
    setField("");
    setValue("");
    setComp("");
  };

  const clear = () => {
    onChange([]);
    handleClose();
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const columnLabels = {};
  for (let col of columnInfo) {
    columnLabels[col.id] = col.name;
  }

  const open = Boolean(anchorEl);

  const filtersOn = filters && filters.length > 0;

  return (
    <>
      <Button
        className={
          filtersOn
            ? cx(classes.control, classes.right, classes.filterOn)
            : cx(classes.control, classes.right)
        }
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
          <div key={i} className={classes.row}>
            <span className={classes.filterEntryColumn}>
              {columnLabels[f.field]}
            </span>
            <span className={classes.filterEntryColumn}>
              {operators.find(o => o.value === f.comp).name}
            </span>
            <span className={classes.filterEntryColumn}>{f.value}</span>
            <div className={classes.deleteButton}>
              <Button onClick={() => remove(f)}>Delete</Button>
            </div>
          </div>
        ))}
        <div className={classes.row}>
          <TextField
            select
            className={cx(classes.margins, classes.selectField)}
            variant="filled"
            label="Field"
            name="Field"
            value={field}
            size="small"
            onChange={e => setField(e.target.value)}
          >
            {columnInfo.map(col => (
              <MenuItem key={col.id} value={col}>
                {col.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            className={cx(classes.marginsVertical, classes.selectField)}
            variant="filled"
            label="Comparator"
            name="Comparator"
            value={comp}
            size="small"
            onChange={e => setComp(e.target.value)}
          >
            {operators.map(op => (
              <MenuItem key={op.value} value={op.value}>
                {op.name}
              </MenuItem>
            ))}
          </TextField>
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
        </div>
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
      </Popover>
    </>
  );
};

export default FilterControls;
