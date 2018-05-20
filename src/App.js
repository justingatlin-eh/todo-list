import React, { Component } from "react";
import Header from "components/Header";
import ToDoItem from "components/ToDoItem";

const App = ({ match: { params } }) => {
  <section className="App">
    <Header />
    <ToDoItem taskObj={this.props.taskObj} />
  </section>;
};
export default App;
