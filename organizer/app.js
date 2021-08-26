"use strict";

// const test = true;
// console.log(test);

const database = {
  todoItems: [
    { id: 0, name: "Get Groceries", description: "Do with a shopping list" },
    { id: 1, name: "Run and exercise", description: "For at least 45 mins" },
    { id: 2, name: "Build a to-do app", description: "Use JavaScript" },
  ],
  currenTask: null,
  totalToDoItems: 0,
};

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
    todoItems: [
      { id: 0, name: "Get Groceries", description: "Do with a shopping list" },
      { id: 1, name: "Run and exercise", description: "For at least 45 mins" },
      { id: 2, name: "Build a to-do app", description: "Use JavaScript" },
    ],
    currenTask: null,
    totalToDoItems: 0,
  };
  // return function to be able to read the data with a public method
  return {
    // get the items
    getTasks: function () {
      return database.todoItems;
    },
    logData: function () {
      return database;
    },
  };
})();
// 2. UI CONTROLLER
const userControl = (function () {
  const userSelectors = {
    listWithTasks: ".task-list",
    addTaskBtn: ".add-new-task",
  };
  // public method
  return {
    fillTaskList: function (todoItems) {
      let html = "";

      todoItems.forEach(function (item) {
        html += `<li> id="item-${item.id}"> ${item.name}
      <i class="fas fa-edit"></i> <i class="fas fa-trash"></i></span>
      </li>`;
      });
      // Insert list names
      document.querySelector(userSelectors.listWithTasks).innerHTML = html;
    },
    getSelectors: function () {
      return userSelectors;
    },
  };
})();
// 3. APP MANAGER
const appManager = (function (taskManager, userControl) {
  // Load events
  const loadEvents = function () {
    // get user selectors
    const userSelectors = userControl.getSelectors();
    // event which adds task
    document
      .querySelector(userSelectors.addTaskBtn)
      .addEventListener("click", addTaskSubmit);
  };
  // Add task submit method
  const addTaskSubmit = function (e) {
    console.log("Adding Task....");
    e.preventDefault();
  };
  // public methods
  return {
    startApp: function () {
      console.log("Initializing app....");
      // fetch items from database
      const todoItems = taskManager.getTasks();
      // Fill in the list with items
      userControl.fillTaskList(todoItems);
      // load events function
      loadEvents();
    },
  };
})(taskManager, userControl);

// Start the app
appManager.startApp();
