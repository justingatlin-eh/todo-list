import React from "react";
import styled from "styled-components";
import ToDoItem from "components/ToDoItem";
import {
  Container,
  Select,
  Input,
  Label,
  FormButton
} from "assets/styles/SiteTheme";

const InputItem = ({ name, value }) => {
  return (
    <div className={name}>
      <Label for={name}>{name}</Label>
      <Input type="text" id={name} name={name} value={value} />
    </div>
  );
};

const getInputItems = obj => {
  let arr = [];
  const re = /id|timestamp/i;
  Object.entries(obj).map(item => {
    if (!re.test(item[0])) arr.push(<InputItem key={obj.id} item={item} />);
  });
  return arr;
};

const updateTask = () => console.log("update");

const FormContainer = props => {
  const itemObj = props.item;
  const title = (props.item ? "Edit" : "Add").concat(" Task");
  return (
    <Container>
      <h1>{title}</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateTask(itemObj);
        }}
      >
        {itemObj.id ? getInputItems(itemObj) : null}

        <FormButton type="submit">Update Task</FormButton>
      </form>
    </Container>
  );
};

export default FormContainer;
