import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PageHeader from "./components/ui/PageHeader";
import PageFooter from "./components/ui/PageFooter";

export default function Router() {
  return (
    <BrowserRouter>
      <PageHeader />
      <div className="site-layout-content">
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
      <PageFooter />
    </BrowserRouter>
  );
}
