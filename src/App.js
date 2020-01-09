import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AppNavBar from "./Nav/AppNavbar";
import AppToolbar from "./Nav/AppToolbar";
import OffersPage from "./Pages/Offers/OffersPage";
import AddStudentPage from "./Pages/AddStudent/AddStudentPage";
import AddOfferPage from "./Pages/AddOffer/AddOfferPage";
import EmailFlowPage from "./Pages/EmailFlow/EmailFlowPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy/PrivacyPolicyPage";
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
    name: "Privacy Policy",
    path: "/privacy-policy",
    component: PrivacyPolicyPage,
    icon: "info"
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
          <Route path="/add-offer" component={AddOfferPage} />
          <Route path="/add-student" component={AddStudentPage} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
