import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const AppToolbar = ({ styles }) => {
  const themeKey = "career-debut-theme";
  const currentTheme = localStorage.getItem(themeKey);
  const toggleTheme = () => {
    if (currentTheme === "dark") localStorage.setItem(themeKey, "light");
    else localStorage.setItem(themeKey, "dark");
    window.location.reload();
  };

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" noWrap>
          Career Debut
        </Typography>
        <Fab size="small" onClick={toggleTheme}>
          <Icon>{currentTheme === "dark" ? "nights_stay" : "wb_sunny"}</Icon>
        </Fab>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
