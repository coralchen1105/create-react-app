import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

// fixed bootstrap install
//npm install --save react-bootstrap bootstrap@3

import "bootstrap/dist/css/bootstrap.css";

// look for index.js file when react-scripts start: http://localhost:3000/index.html
// the client side is a webpack dev server
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
