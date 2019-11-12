import React from "react";
import { createFarceRouter, makeRouteConfig, Route } from "found";
import { BrowserProtocol, queryMiddleware } from "farce";
import HomePage from "./Pages/Home/HomePage";
import SchoolPage from "./Pages/School/SchoolPage";
import WorkPage from "./Pages/Work/WorkPage";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
    icon: "home"
  },
  {
    name: "School",
    path: "/school",
    component: SchoolPage,
    icon: "school"
  },
  {
    name: "Work",
    path: "/work",
    component: WorkPage,
    icon: "work"
  }
];

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    routes.map(route => <Route path={route.path} Component={route.component} />)
  )
});

export { Router as default, routes };
