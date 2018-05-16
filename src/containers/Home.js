import React from "react";
import TaskAPI from "api";
import ToDoItem from "components/ToDoItem";

let data = TaskAPI.getAllTasks();

const Home = () => (
  <section className="fluid-container">
    <h1>ToDo List</h1>
    <div className="list">
      {data.map(item => <ToDoItem key={item.id} item={item} />)}
    </div>
  </section>
);

export default Home;
