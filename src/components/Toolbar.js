import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import MuiToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Auth from "../utils/auth";
import { getCurrentTheme, toggleTheme } from "../utils/theme";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  home: { cursor: "pointer" }
}));

const Toolbar = () => {
  const styles = useStyles();
  const currentTheme = getCurrentTheme().palette.type;

  const handleThemeToggle = () => {
    toggleTheme();
    window.location.reload();
  };

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <MuiToolbar className={styles.toolbar}>
        <Typography variant="h6" noWrap className={styles.home}>
          Prospect
        </Typography>
        <div>
          <Fab size="small" onClick={handleThemeToggle}>
            <Icon>{currentTheme === "dark" ? "nights_stay" : "wb_sunny"}</Icon>
          </Fab>
          <Button onClick={Auth.logout}>Logout</Button>
        </div>
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
