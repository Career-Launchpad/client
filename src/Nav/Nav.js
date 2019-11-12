import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import { darkTheme, lightTheme, isDark } from "./theme";
import AppToolbar from "./AppToolbar";
import AppNavBar from "./AppNavBar";
import useStyles from "./Nav.styles";

const Nav = props => {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    if (isDark(theme)) setTheme(lightTheme);
    else setTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.app}>
        <AppToolbar
          styles={styles}
          toggleTheme={toggleTheme}
          darkTheme={theme.palette.type === "dark"}
        />
        <AppNavBar styles={styles} setLoading={setLoading} />
        <main className={styles.main}>
          <div className={styles.toolbarSpace} />
          <LinearProgress classes={{ root: !loading && styles.hidden }} />
          <div className={styles.content}>{props.children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Nav;
