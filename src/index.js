import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import HandleToDoTasks from "resources/reducer";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "App";
import FormContainer from "components/FormContainer";
import AddTask from "containers/AddTask";
import { Container } from "assets/styles/SiteTheme";

import { fetchTasks, tasksLoaded, taskLoadError } from "resources/actions";
import TaskAPI from "resources";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(HandleToDoTasks);

store.dispatch(fetchTasks());
TaskAPI.getAllTasks().then(
  data => store.dispatch(tasksLoaded(data)),
  error => store.dispatch(taskLoadError(error))
);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path="/" component={App} />
          </Container>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

registerServiceWorker();
