// Wrapper Imports
import React from "react";
import { connect } from "react-redux";
import ToDoList from "components/ToDoList";
import { toggleModal, startEdit, closeModal } from "resources/actions";

const mapStateToProps = state => {
  return {
    loading: state.get("loading"),
    taskList: state.get("taskList"),
    showModal: state.get("showModal"),
    item: state.get("item")
  };
};

const mapDispatchToProps = dispatch => ({
  editHandler: function(item) {
    console.log("edit", item);
    dispatch(startEdit(item));
  },
  handleClicks: function(event) {
    console.log("click", event);
  },
  handleChange: function(event) {
    console.log("change", event);
  },
  saveChanges: function() {
    console.log("save changes");
  },
  endEdit: function() {
    console.log("end edit");
    dispatch(closeModal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
