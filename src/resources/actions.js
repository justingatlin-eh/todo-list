import {
  ADD_TASK,
  DELETE_TASK,
  SAVE_CHANGES,
  TASKS_LOAD_SUCCESS,
  TASKS_LOAD_ERROR,
  TASKS_FETCH,
  CLOSE_MODAL,
  START_ACTION
} from "resources/constants";

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

export const saveChanges = data => {
  return {
    type: SAVE_CHANGES,
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

export const actionSuccess = data => {
  return {
    type: ACTION_SUCCESS,
    data
  };
};

export const startAction = item => {
  return {
    type: START_ACTION,
    data: item
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
