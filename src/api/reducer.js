import {
  TASKS_LOADING,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TASKS_LOAD_SUCCESS,
  TASKS_LOAD_ERROR
} from "api/constants";
import Immutable, { fromJS } from "immutable";

const initialState = fromJS({
  loading: true,
  taskObj: null
});

const HandleToDoTasks = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LOADING:
      return state.set("loading", state.loading);
      break;
    case TASKS_LOAD_SUCCESS:
      return state.set("loading", false).set("taskObj", action.data);
      break;
    case ADD_TASK:
      return state.set("loading", action.data);
      break;
    case TASKS_LOAD_SUCCESS:
      return state.set("loading", action.data);
      break;
    case TASKS_LOAD_SUCCESS:
      return state.set("loading", action.data);
      break;
    case TASKS_LOAD_SUCCESS:
      return state.set("loading", action.data);
      break;
    default:
      return state;
  }
};

export default HandleToDoTasks;
