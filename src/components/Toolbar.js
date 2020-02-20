import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import LinearProgress from "@material-ui/core/LinearProgress";
import MuiToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Auth from "../utils/auth";
import { ThemeConsumer } from "../utils/theme";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  themeButton: {
    color: "#FFFFFF"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  home: { cursor: "pointer" }
}));

const Toolbar = ({ loading }) => {
  const styles = useStyles();
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <AppBar position="fixed" className={styles.appBar} color="default">
          <MuiToolbar className={styles.toolbar}>
            <Typography variant="h6" noWrap className={styles.home}>
              Prospect
            </Typography>
            <div>
              <IconButton size="small" onClick={() => toggleTheme()}>
                <Icon className={styles.themeButton}>
                  {theme.palette.type === "dark" ? "nights_stay" : "wb_sunny"}
                </Icon>
              </IconButton>
              <Button onClick={Auth.logout}>Logout</Button>
            </div>
          </MuiToolbar>
          <LinearProgress
            color="secondary"
            style={{ visibility: loading ? "visible" : "hidden" }}
          />
        </AppBar>
      )}
    </ThemeConsumer>
  );
};

export default Toolbar;
