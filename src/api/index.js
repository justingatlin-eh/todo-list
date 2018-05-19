import mockdata from "api/mockdata";
import Immutable from "immutable";

class TaskAPI {
  constructor() {
    this.newEmptyTask = {
      id: "",
      name: "",
      description: "",
      duedate: "",
      status: "",
      timestamp: ""
    };
    this.taskList = [];
  }

  // Mock uniqu id
  get uniqueID() {
    const n1 = Date.now(); // Unix timestamp
    const n2 = Math.floor(Math.random() * 1000); // Random whole number
    return String(n1).concat("-", n2); //Of type String
  }

  //Retrieve all tasks
  static getAllTasks() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], mockdata));
      reject("Some error...");
    });
  }

  //Add a new task to the list
  add() {
    console.log("addTask");
  }

  //Remove a task from the list
  delete() {
    console.log("deleteTask");
  }

  //Update a task in the list
  modify() {
    console.log("modifyTask");
  }

  // Sort the list in a particular order
  sortTasks(sortobj = { property: "", order: "" }) {
    console.log("sort", sortobj);
  }
}

export default TaskAPI;
