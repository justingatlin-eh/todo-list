import {
  TASKS_LOADING,
  ADD_TASK,
  DELETE_TASK,
  SAVE_CHANGES,
  ACTION_SUCCESS,
  TASKS_LOAD_ERROR,
  TASKS_FETCH,
  CLOSE_MODAL,
  START_EDIT
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
    case ACTION_SUCCESS:
      return state.set("loading", false).set("taskList", action.data);
    case START_EDIT:
      return state.set("showModal", true).set("item", action.data);
    case CLOSE_MODAL:
      return state.set("showModal", false);
    case SAVE_CHANGES:
      return state.set("loading", true).set("saveResult", action.data);
    default:
      return state;
  }
};

export default HandleToDoTasks;
