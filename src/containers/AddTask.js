import React from "react";

export default props => (
  <section>
    <h1>Add Task</h1>
    <form
      onSubmit={e => {
        e.preventDefault();
        props.addTask();
      }}
    >
      <input value="" name="name" />
      <input value="" name="desc" />
      <input value="" name="duedate" />
      <button type="submit">Add Task</button>
    </form>
  </section>
);
