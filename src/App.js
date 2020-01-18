import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AppNavBar from "./Nav/AppNavbar";
import AppToolbar from "./Nav/AppToolbar";
import OffersPage from "./Pages/Offers/OffersPage";
import AddStudentPage from "./Pages/AddStudent/AddStudentPage";
import AddOfferPage from "./Pages/AddOffer/AddOfferPage";
import EmailFlowPage from "./Pages/EmailFlow/EmailFlowPage";
import LoginPage from "./Pages/Login/LoginForm";
import useStyles from "./App.styles";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const routes = [
  {
    name: "Offers",
    path: "/",
    component: OffersPage,
    icon: "home"
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
    icon: "home"
  },
  {
    name: "Email Flow",
    path: "/email",
    component: EmailFlowPage,
    icon: "email"
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

export default withFirebaseAuth({
  firebaseAppAuth
})(App);
