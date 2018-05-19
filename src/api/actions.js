import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TASKS_LOAD_SUCCESS,
  TASKS_LOAD_ERROR
} from "api/constants";

const addTask = data => {
  return {
    type: ADD_TASK,
    data
  };
};

const deleteTask = data => {
  return {
    type: DELETE_TASK,
    data
  };
};

const updateTask = data => {
  return {
    type: UPDATE_TASK,
    data
  };
};

const taskLoadError = data => {
  return {
    type: TASKS_LOAD_ERROR,
    data
  };
};

const tasksLoaded = data => {
  return {
    type: TASKS_LOAD_SUCCESS,
    data
  };
};

export { addTask, deleteTask, updateTask, taskLoadError, tasksLoaded };
