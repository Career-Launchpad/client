import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AppNavBar from "./Nav/AppNavbar";
import AppToolbar from "./Nav/AppToolbar";
import HomePage from "./Pages/Home/HomePage";
import LinksPage from "./Pages/Links/LinksPage";
import useStyles from "./App.styles";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
    icon: "home"
  },
  {
    name: "Links",
    path: "/links",
    component: LinksPage,
    icon: "link"
  }
];

const App = () => {
  const styles = useStyles();
  return (
    <div className={styles.app}>
      <AppToolbar styles={styles} />
      <AppNavBar styles={styles} routes={routes} />
      <main className={styles.main}>
        <div className={styles.toolbarSpace} />
        <Switch>
          {routes.map(route => (
            <Route
              key={route.name}
              path={route.path}
              component={route.component}
              exact
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
