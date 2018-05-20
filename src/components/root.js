// Parent component for the site
import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-redux";
import App from "App";

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </Provider>
    );
  }
}
