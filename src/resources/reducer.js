import {
  TASKS_LOADING,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TASKS_LOAD_SUCCESS,
  TASKS_LOAD_ERROR,
  TASKS_FETCH,
  TOGGLE_MODAL
} from "resources/constants";
import Immutable, { fromJS } from "immutable";

const initialState = fromJS({
  loading: true,
  taskList: null,
  showModal: false
});

const HandleToDoTasks = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_FETCH:
      return state.set("loading", true);
    case TASKS_LOAD_SUCCESS:
      return state.set("loading", false).set("taskList", action.data);
    case TOGGLE_MODAL:
      return state.set("showModal", !state.get("showModal"));
    // case ADD_TASK:
    //   return state.set("loading", action.data);
    // case TASKS_LOAD_SUCCESS:
    //   return state.set("loading", action.data);
    // case TASKS_LOAD_SUCCESS:
    //   return state.set("loading", action.data);
    // case TASKS_LOAD_SUCCESS:
    //   return state.set("loading", action.data);
    default:
      return state;
  }
};

export default HandleToDoTasks;
