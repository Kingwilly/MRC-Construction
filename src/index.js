import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/normalize.css";
import "./assets/css/fonts.css";
import "./assets/css/styles.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
