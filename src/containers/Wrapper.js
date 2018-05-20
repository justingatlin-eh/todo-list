// Wrapper Imports
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Redux Store Imports
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TaskAPI from "api";
import { fetchTasks } from "api/actions";
import HandleToDoTasks from "api/reducer";

const store = createStore(HandleToDoTasks, applyMiddleware(thunk));

store.dispatch(fetchTasks());

TaskAPI.getAllTasks().then(
  data => store.dispatch(tasksLoaded(data)),
  error => store.dispatch(taskLoadError(error))
);

class Wrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Provider>
    );
  }
}

export default Wrapper;
