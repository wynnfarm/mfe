import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

console.log("Marketing - Webpack public path:", __webpack_public_path__);

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
