// Wrapper Imports
import React from "react";
import { connect } from "react-redux";
import { SiteTheme } from "assets/styles/SiteTheme";
import Modal from "components/Modal";
import ToDoList from "components/ToDoList";
import { toggleModal } from "resources/actions";

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleClicks = this.handleClicks.bind(this);
    this.showModal = false;
    this.item = {};
  }

  componentDidMount() {}

  handleClicks(item) {
    this.item = item;
    this.props.toggle();
  }

  render() {
    return (
      <SiteTheme>
        {this.props.loading ? (
          <div>Loading...</div>
        ) : (
          <ToDoList
            handleClicks={this.handleClicks}
            taskList={this.props.taskList}
          />
        )}
        <Modal
          handleClick={this.handleClicks}
          showModal={this.props.showModal}
          item={this.item}
        />
      </SiteTheme>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.get("loading"),
    taskList: state.get("taskList"),
    showModal: state.get("showModal")
  };
};

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
