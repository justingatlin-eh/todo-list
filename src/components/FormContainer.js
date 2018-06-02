import React from "react";
import {
  Container,
  Input,
  Label,
  FormButton,
  ErrorMsg
} from "assets/styles/SiteTheme";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.item };
    this.handleChange = this.handleChange.bind(this);
  }

  createSelect = (name, value) => {
    return (
      <select name={name} onChange={this.handleChange}>
        <option value="false" />
        <option value="true" selected={value ? "selected" : null}>
          complete
        </option>
      </select>
    );
  };

  inputItem = (name, value, key, error) => {
    return (
      <div className={`${name} container`} key={key}>
        <Label for={name}>{name}</Label>
        {/status/i.test(name) ? (
          this.createSelect(name, value)
        ) : (
          <Input
            type={/duedate/i.test(name) ? "date" : "text"}
            id={name}
            name={name}
            value={this.state[name]}
            onChange={this.handleChange}
            error={error}
          />
        )}
      </div>
    );
  };

  getInputItems = obj => {
    let arr = [];
    const re = /id|timestamp/i;
    Object.entries(obj).map((item, idx) => {
      const key = "item-" + idx;
      if (!re.test(item[0])) {
        arr.push(this.inputItem(item[0], item[1], key));
      }
    });
    return arr;
  };

  handleChange = event => {
    const el = event.target;
    const name = el.name;
    const value = el.value;
    const obj = {};
    obj[name] = value;
    this.setState(obj);
  };

  render() {
    const itemObj = this.props.item;
    const title = (itemObj ? "Edit" : "Add").concat(" Task");
    return (
      <Container>
        <h1>{title}</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.saveChanges(this.state);
          }}
        >
          {this.getInputItems(itemObj)}

          <FormButton type="submit">Update Task</FormButton>
        </form>
      </Container>
    );
  }
}

export default FormContainer;
