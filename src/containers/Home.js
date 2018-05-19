import { connect } from 'react-redux';
import { tasksLoaded, taskLoadError } from 'api/actions';
import React from "react";
import ToDoItem from "components/ToDoItem";

const Home = props => {
  return (
    <section className="fluid-container">
      <h1>ToDo List</h1>
      <ToDoItem {...props} />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.get("loading"),
    taskObj: state.get("taskObj")
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: () => {
    return TaskAPI.getAllTasks().then(
      data => dispatch(tasksLoaded(data)),
      error => dispatch(taskLoadError(error))
    );
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));