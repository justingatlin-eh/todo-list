import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "containers/Home";
import AddTask from "containers/AddTask";

export default () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/addtask" component={AddTask} />
    </Switch>
  </main>
);
