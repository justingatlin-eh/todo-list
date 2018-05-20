// Parent component for the site
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "App";

export default ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Provider>
);
