//Connect this container to the redux store
import { connect } from "react-redux";
import ToDoList from "components/ToDoList";
import TaskAPI from "resources/TaskAPI";
import { startEdit, closeModal } from "resources/actions";

//Props available to connected containers
const mapStateToProps = state => {
  return {
    loading: state.get("loading"),
    taskList: state.get("taskList"),
    showModal: state.get("showModal"),
    item: state.get("item")
  };
};

//Dispatch actions
const mapDispatchToProps = (dispatch, props) => ({
  editHandler: function(item) {
    dispatch(startEdit(item));
  },
  handleClicks: function(event) {
    console.log("click", event);
  },
  handleChange: function(event) {
    console.log("change", event);
  },
  saveChanges: function(item, props) {
    //dispatch(item);
    const id = item.id;
    //Returns the error file or success
    console.log("saveChanges", item);
    const result = TaskAPI.modify(item);
  },
  endEdit: function() {
    console.log("end edit");
    dispatch(closeModal());
  }
});

//Connect to redux store
//ToDoList is called
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
