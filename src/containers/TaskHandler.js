//Connect this container to the redux store
import { connect } from "react-redux";
import ToDoList from "components/ToDoList";
import TaskAPI from "resources/TaskAPI";
import { startAction, closeModal, updateSuccess } from "resources/actions";

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
  /**
   * @description Sends an object to be saved by the TaskAPI
   */
  saveChanges: function(item, props) {
    const id = item.id;
    dispatch(startAction())
    TaskAPI.modify(item)
      .then(function(response) {
        console.log("promise then", response);
        dispatch(updateSuccess());
      })
      .catch(err => {
        console.log("promise error", err);
        //dispatch(failure(err));
      });
  },
  endEdit: function() {
    console.log("end edit");
    dispatch(closeModal());
  }
});

//Connect to redux store
//ToDoList is called
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
