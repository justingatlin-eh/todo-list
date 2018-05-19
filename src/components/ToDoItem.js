import React from "react";

const ToDoItem = ({ props }) => {
  console.log("ToDoItem", props);
  return (
    <div className="item">
      <div>{this.props.item.name}</div>
      <div>{this.props.item.description}</div>
      <div>{this.props.item.duedate}</div>
      <div>{this.props.item.status}</div>
    </div>
  );
};

export default ToDoItem;
