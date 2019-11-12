import React from "react";
import ReactDOM from "react-dom";
import { resolver } from "found";
import Router from "./router";
import "./index.css";

ReactDOM.render(
  <Router resolver={resolver} />,
  document.getElementById("root")
);
