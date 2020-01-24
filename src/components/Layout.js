import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppNavBar from "./Navbar";
import AppToolbar from "./Toolbar";

const useStyles = makeStyles(theme => ({
  app: {
    display: "flex"
  },
  main: {
    flexGrow: 1
  },
  toolbarSpace: theme.mixins.toolbar
}));

const Layout = ({ children, loading }) => {
  const styles = useStyles();
  return (
    <div className={styles.app}>
      <AppToolbar loading={loading} />
      <AppNavBar />
      <main className={styles.main}>
        <div className={styles.toolbarSpace} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
