import mockdata from "resources/mockdata";

const EmptyTask = {
  id: "",
  name: "",
  description: "",
  duedate: "",
  status: false,
  timestamp: Date.now()
};

const validationErrors = {
  empty: "Field is empty"
};

function validation(obj) {
  let result = {};
  const entriesArr = Object.entries(obj);
  entriesArr.forEach(function(item, idx) {
    //Array => 0: key, 1: value
    const name = item[0];
    const value = item[1];
    const type = typeof value;
    switch (type) {
      case "string":
        if (!value) {
          result[name] = validationErrors.empty;
        }
        break;
    }
  });
  return result;
}

function findMatching(obj) {
  const objID = obj.id;
  const foundIdx = mockdata.findIndex(elm => elm.id == objID);
  return foundIdx != -1 ? foundIdx : false;
}

class TaskAPI {
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
  static add() {
    console.log("addTask");
  }

  //Remove a task from the list
  static delete() {
    console.log("deleteTask");
  }

  //Update a task in the list
  static modify(modifiedTask) {
    console.log("API: Modify");
    const result = validation(modifiedTask);
    const isValid = Object.keys(result).length ? result : true;
    if (isValid === true) {
      const matchingItem = findMatching(modifiedTask.id);
    }
    return isValid;
  }

  // Sort the list in a particular order
  static sortTasks(sortobj = { property: "", order: "" }) {
    console.log("sort", sortobj);
  }
}

export default TaskAPI;
