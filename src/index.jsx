// @flow

import React from "react";
import ReactDOM from "react-dom";

import HelloWorldContainer from "./hello-world-container.jsx";

const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(<HelloWorldContainer />, root);
}
