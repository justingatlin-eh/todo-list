import React from "react";
import styled from "styled-components";
import ToDoItem from "components/ToDoItem";

const Unordered = styled.ul`
  list-style-type: none;
`;

const ToDoList = props => {
  return (
    <Unordered>
      {props.taskList.map(item => <ToDoItem item={item} />)}
    </Unordered>
  );
};

export default ToDoList;
