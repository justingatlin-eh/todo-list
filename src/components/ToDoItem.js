import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 25px;
  background-color: ${props => (props.idx % 2 ? "#eeeeee" : "#cccccc")};
  &:last-child {
    margin-bottom: 0;
  }
`;

const Name = styled.h3`
  display: inline;
  margin-right: 10px;
`;

const PseudoLink = styled.span`
  text-decoration: underline;
  color: blue;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const Desc = styled.div``;

const Date = styled.div``;

const Status = styled.div``;

const ToDoItem = props => {
  return (
    <ListItem idx={props.idx}>
      <div>
        <Name>{props.item.name}</Name>
        <PseudoLink
          onClick={event => {
            props.handleClicks(props.item);
          }}
        >
          Edit
        </PseudoLink>
      </div>
      <Desc>{props.item.description}</Desc>
      <Date>{props.item.duedate}</Date>
      <Status>{props.item.status}</Status>
    </ListItem>
  );
};

export default ToDoItem;
