"use strict";

// const test = true;
// console.log(test);

// 4.LOCAL STORAGE CONFIGURATION - to be added at the end

// 1. TASKS MANAGER
const taskManager = (function () {
  // method to contruct the task
  const task = function (id, name, description) {
    this.id = id;
    this.name = name;
  };
  // data structure
  const database = {
    todoitems: [
      { id: 0, name: "Get Groceries", description: "Do with a shopping list" },
      { id: 1, name: "Run and exercise", description: "For at least 45 mins" },
      { id: 2, name: "Build a to-do app", description: "Use JavaScript" },
    ],
    currenTask: null,
    totalToDoItems: 0,
  };
  // return function to be able to read the data with a public method
  return {
    logData: function () {
      return database;
    },
  };
})();
// 2. USER CONTROLLER
const userControl = (function () {
  // public method
  return {};
})();
// 3. APP MANAGER
const appManager = (function (taskManager, userControl) {
  // public methods
  return {
    startApp: function () {
      console.log("Initializing app....");
    },
  };
})(taskManager, userControl);

// Start the app
appManager.startApp();
