import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const AppToolbar = ({ styles, toggleTheme, darkTheme }) => (
  <AppBar position="fixed" className={styles.appBar}>
    <Toolbar className={styles.toolbar}>
      <Typography variant="h6" noWrap>
        Occupoint
      </Typography>
      <Fab size="small" onClick={toggleTheme}>
        <Icon>{darkTheme ? "nights_stay" : "wb_sunny"}</Icon>
      </Fab>
    </Toolbar>
  </AppBar>
);

export default AppToolbar;
