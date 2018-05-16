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
  }

  // Mock uniqu id
  static uniqueID() {
    const n1 = Date.now(); // Unix timestamp
    const n2 = Math.floor(Math.random() * 1000); // Random whole number
    return String(n1).concat("-", n2); //Of type String
  }

  //Retrieve all tasks
  static getAllTasks() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], mockdata));
    });
  }

  //Add a new task to the list
  static add() {
    console.log("addTask");
  }

  //Remove a task from the list
  static delete() {
    console.log("deleteTask");
  }

  //Update a task in the list
  static modify() {
    console.log("modifyTask");
  }

  // Sort the list in a particular order
  static sortTasks(sortobj = { property: "", order: "" }) {
    console.log("sort", sortobj);
  }
}

export default TaskAPI;
