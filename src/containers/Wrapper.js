// Wrapper Imports
import React from "react";
import { connect } from "react-redux";

import ToDoList from "components/ToDoList";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("state", this.state);
  }

  handleChange() {
    //Dispatch here
  }

  render() {
    console.log("Wrapper", this);
    return this.props.loading ? (
      <div>Loading...</div>
    ) : (
      <ToDoList taskList={this.props.taskList} />
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.get("loading"),
    taskList: state.get("taskList")
  };
};

const mapDispatchToProps = dispatch => ({
  onPageLoad: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
