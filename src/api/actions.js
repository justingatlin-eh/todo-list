import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TASKS_LOAD_SUCCESS,
  TASKS_LOAD_ERROR
} from "api/constants";

export const addTask = data => {
  return {
    type: ADD_TASK,
    data
  };
};

export const deleteTask = data => {
  return {
    type: DELETE_TASK,
    data
  };
};

export const updateTask = data => {
  return {
    type: UPDATE_TASK,
    data
  };
};

export const taskLoadError = data => {
  return {
    type: TASKS_LOAD_ERROR,
    data
  };
};

export const fetchTasks = () => {
  return {
    type: TASKS_FETCH
  };
};

export const tasksLoaded = data => {
  return {
    type: TASKS_LOAD_SUCCESS,
    data
  };
};
