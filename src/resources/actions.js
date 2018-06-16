import {
  ADD_TASK,
  DELETE_TASK,
  SAVE_CHANGES,
  TASKS_LOAD_SUCCESS,
  TASKS_LOAD_ERROR,
  TASKS_FETCH,
  CLOSE_MODAL,
  START_EDIT
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

export const tasksLoaded = data => {
  return {
    type: TASKS_LOAD_SUCCESS,
    data
  };
};

export const modifyTask = item => {
  return {
    type: START_EDIT,
    data: item
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
