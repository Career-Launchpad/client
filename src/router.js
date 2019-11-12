import React from "react";
import { createFarceRouter, makeRouteConfig, Route } from "found";
import { BrowserProtocol, queryMiddleware } from "farce";
import graphql from "babel-plugin-relay/macro";

import LinksPage from "./Pages/Links/LinksPage";
import HomePage from "./Pages/Home/HomePage";

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
    icon: "link",
    query: graphql`
      query router_Links_Query {
        store {
          ...LinksPage_store
        }
      }
    `
  }
];

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    routes.map(route => (
      <Route
        path={route.path}
        Component={route.component}
        query={route.query}
      />
    ))
  )
});

export { Router as default, routes };
