import React from "react";
import styled from "styled-components";
import ToDoItem from "components/ToDoItem";
import Modal from "components/Modal";

const OrderedList = styled.ol``;

const ToDoList = props => {
  return (
    <div>
      <OrderedList>
        {!props.loading ? (
          props.taskList.map((item, idx) => (
            <ToDoItem
              key={item.id}
              editHandler={props.editHandler}
              idx={idx}
              item={item}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </OrderedList>
      <Modal {...props} />
    </div>
  );
};

export default ToDoList;
