import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
