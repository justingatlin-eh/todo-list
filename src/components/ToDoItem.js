import React from "react";
import styled from "styled-components";

const ListItem = styled.li``;

const Name = styled.h3``;

const Desc = styled.div``;

const Date = styled.div``;

const Status = styled.div``;

const ToDoItem = props => {
  return (
    <ListItem>
      <Name>{props.item.name}</Name>
      <Desc>{props.item.description}</Desc>
      <Date>{props.item.duedate}</Date>
      <Status>{props.item.status}</Status>
    </ListItem>
  );
};

export default ToDoItem;
