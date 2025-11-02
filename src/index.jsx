// Framework ref
// https://github.com/reduxjs/redux/tree/master/examples/real-world
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./js/containers/Root.jsx";
import configureStore from "./js/store/configureStore.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = configureStore();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Root store={store} />
  </Router>
);
