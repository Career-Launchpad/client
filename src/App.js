import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AppNavBar from "./Nav/AppNavbar";
import AppToolbar from "./Nav/AppToolbar";
import OffersPage from "./Pages/Offers/OffersPage";
import AddStudentPage from "./Pages/AddStudent/AddStudentPage";
import AddOfferPage from "./Pages/AddOffer/AddOfferPage";
import EmailFlowPage from "./Pages/EmailFlow/EmailFlowPage";
import useStyles from "./App.styles";

const routes = [
  {
    name: "Offers",
    path: "/",
    component: OffersPage,
    icon: "home"
  },
  {
    name: "Email Flow",
    path: "/email",
    component: EmailFlowPage,
    icon: "email"
  },
  {
    name: "Add Student",
    path: "/add-student",
    component: AddStudentPage,
    icon: "add"
  },
  {
    name: "Add Offer",
    path: "/add-offer",
    component: AddOfferPage,
    icon: "add"
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
