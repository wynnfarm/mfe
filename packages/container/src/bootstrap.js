import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("Container - Webpack public path:", __webpack_public_path__);

ReactDOM.render(<App />, document.querySelector("#root"));
