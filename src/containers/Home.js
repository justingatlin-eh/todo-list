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

export default Home;
