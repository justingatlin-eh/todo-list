import React from "react";
import styled from "styled-components";
import ToDoItem from "components/ToDoItem";

const OrderedList = styled.ol``;

const ToDoList = props => {
  return (
    <OrderedList>
      {props.taskList.map((item, idx) => (
        <ToDoItem
          key={item.id}
          handleClicks={props.handleClicks}
          idx={idx}
          item={item}
        />
      ))}
    </OrderedList>
  );
};

export default ToDoList;
