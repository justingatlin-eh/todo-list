import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "containers/Home";
import AddTask from "containers/AddTask";

export default props => {
  console.log("Wrapper", props);
  return (
    <main>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/addtask" render={props => <AddTask {...props} />} />
      </Switch>
    </main>
  );
};
