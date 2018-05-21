import React from "react";
import styled from "styled-components";
import ToDoItem from "components/ToDoItem";
import { Container, Input, Label, FormButton } from "assets/styles/SiteTheme";

const normalizeDate = val => {};

const inputChanged = event => {
  console.log("inputChange", event.currentTarget.value);
};

const typeObj = {
  duedate: {
    type: "date",
    pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}",
    standardize: function(val) {
      const userValue = val;
      const dateArr = userValue.split(/\-|\/|\\/);
      // 0 = year, 1 = month, 2 = day;
      const sep = "-";
      const vettedValue = dateArr[0].concat(sep, dateArr[1], sep, dateArr[2]);
      return vettedValue;
    },
    format: function(val) {
      return val.replace(/\-/g, "/");
    }
  }
};

const InputItem = props => {
  const name = props.item[0];
  const value = props.item[1];

  return (
    <div className={name}>
      <Label for={name}>{name}</Label>
      <Input
        type={typeObj[name] ? typeObj[name].type : "text"}
        id={name}
        name={name}
        value={value}
        onChange={event => {
          const el = event.currentTarget;
          const name = el.name;
          let value = el.value;
          if (/duedate/i.test(name)) {
            value = typeObj[name].standardize(value);
          }
          return value;
          //inputChanged(value);
        }}
      />
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

const EditTask = props => {
  const itemObj = props.item;

  return (
    <Container>
      <h1>Edit Task</h1>
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

export default EditTask;
