import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { customTheme, Section } from "assets/styles/theme";
import Header from "components/Header";
import Wrapper from "containers";
import HandleToDoTasks from "resources/reducer";
import { tasksLoaded, taskLoadError } from "resources/actions";
import TaskAPI from "./resources";

class App extends Component {
  constructor(props) {
    super(props);
    this.onPageLoad = this.props.onPageLoad.bind(this);
  }

  componentDidMount() {
    //this.onPageLoad();
  }

  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <Section className="App">
          <Header />
          <Wrapper taskObj={this.props.taskObj} />
        </Section>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.get("loading"),
    taskObj: state.get("taskObj")
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPageLoad: () => {
    return TaskAPI.getAllTasks().then(
      data => dispatch(tasksLoaded(data)),
      error => dispatch(taskLoadError(error))
    );
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
