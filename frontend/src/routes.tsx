import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import landing from "./pages/landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={landing} />
      <Route path="/app" component={OrphanagesMap} />
    </BrowserRouter>
  );
}

export default Routes;
