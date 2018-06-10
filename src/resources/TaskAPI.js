import mockdata from "resources/mockdata";

/**
 * @description Template for new task
 */
const EmptyTask = {
  id: "",
  name: "",
  description: "",
  duedate: "",
  status: false,
  timestamp: Date.now()
};
/**
 * @description Default Promise
 * @param {@} url
 */

/**
 * @description API to handle Add, Delete, Update and sort operations
 */
class TaskAPI {
  /**
   * @description Simulate a unique id for each task
   * @returns { String }
   */
  get uniqueID() {
    const n1 = Date.now(); // Unix timestamp
    const n2 = Math.floor(Math.random() * 1000); // Random whole number
    return String(n1).concat("-", n2); //Of type String
  }

  /**
   * @description Retriev an array with all tasks
   * @returns { Array } An array of task objects
   */
  static getAllTasks() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], mockdata));
      reject("Some error...");
    });
  }

  /**
   * @description Modify a task
   * @param { Object} modifiedTask
   * @returns { Boolean }
   */
  static modify(modifiedTask) {
    return new Promise((resolve, reject) => {
      const matchingIdx = mockdata.findIndex(elm => elm.id == modifiedTask.id);
      if (matchingIdx === -1) {
        mockdata[matchingIdx] = modifiedTask;
        resolve(true);
      }
      reject(false);
    });
  }

  /**
   * @description Add a task to the array of tasks
   * @param { Object } An object to add to the task array
   * @returns { Boolean }
   */
  static add(newTask) {
    mockdata.push(newTask);
    return true;
  }

  /**
   * @description Delete a task from the task array
   * @param { String } The id of the task to delete
   * @returns { Boolean }
   */
  static delete(id) {
    delete mockdata[id];
  }

  /**
   * @description Sort the array of tasks based on a property in the task object
   * @param { Object } sortobj An object with two properties, a sort order and the property in the task object to sort by
   * @returns { Array } An array of tasks sorted based on the property and order provided
   */
  static sortTasks(sortobj = { property: "", order: "" }) {
    console.log("sort", sortobj);
  }
}

export default TaskAPI;
