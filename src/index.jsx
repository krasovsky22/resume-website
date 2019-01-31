//@ts-check
import React from "react";
import ReactDOM from "react-dom";

import MainContent from "./views/layout";

import "src/scss/bootstrap.scss";
import "reset-css";

import "./main.scss";

ReactDOM.render(<MainContent />, document.getElementById("app-container"));
