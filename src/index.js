// Framework ref
// https://github.com/reduxjs/redux/tree/master/examples/real-world
import React from "react";
import * as serviceWorker from "./serviceWorker";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./js/containers/Root";
import configureStore from "./js/store/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
