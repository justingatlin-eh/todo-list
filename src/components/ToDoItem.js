import React from "react";

const ToDoItem = props => {
  let props = props || { item: {} };
  console.log("ToDoItem", props);
  return (
    <div className="item">
      <div>{props.item.name}</div>
      <div>{props.item.description}</div>
      <div>{props.item.duedate}</div>
      <div>{props.item.status}</div>
    </div>
  );
};

export default ToDoItem;
