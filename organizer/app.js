// "use strict";

const test = true;
console.log(test);

// // 4.LOCAL STORAGE CONFIGURATION - to be added at the end

// // 1. TASKS MANAGER
// const taskManager = (function () {
//   // method to contruct the task
//   const task = function (id, name, description) {
//     this.id = id;
//     this.name = name;
//   };
//   // data structure
//   const database = {
//     todoItems: [
//       //   { id: 0, name: "Get Groceries", description: "Do with a shopping list" },
//       //   { id: 1, name: "Run and exercise", description: "For at least 45 mins" },
//       //   { id: 2, name: "Build a to-do app", description: "Use JavaScript" },
//     ],
//     currenTask: null,
//     totalToDoItems: 0,
//   };
//   // return function to be able to read the data with a public method
//   return {
//     // get the items
//     getTasks: function () {
//       return database.todoItems;
//     },
//     addTask: function (name) {
//       //   console.log(name);
//       // create ID for each task
//       let ID;
//       if (database.todoItems.length > 0) {
//         ID = database.todoItems[database.todoItems.length - 1].id + 1;
//       } else {
//         ID = 0;
//       }
//       let newTask = new task(ID, name);
//       database.todoItems.push(newTask);
//       return newTask;
//       // for future: here to add description to the task
//     },
//     logData: function () {
//       return database;
//     },
//   };
// })();

// // 2. USER CONTROLLER
// const userControl = (function () {
//   const userSelectors = {
//     listWithTasks: ".task-list",
//     addTaskBtn: ".add-new-task",
//     editBtn: ".update-btn",
//     backBtn: ".back-btn",
//     deleteBtn: ".delete-btn",
//     taskNameInput: "#task-name",
//   };
//   // public method
//   return {
//     fillTaskList: function (todoItems) {
//       let html = "";

//       todoItems.forEach(function (item) {
//         html += `<li>${item.id}. ${item.name}
//       <i class="update-btn fas fa-edit"></i> <i class="fas fa-trash"></i></span>
//       </li>`;
//       });
//       // Insert list names
//       document.querySelector(userSelectors.listWithTasks).innerHTML = html;
//     },
//     getTaskInput: function () {
//       return {
//         name: document.querySelector(userSelectors.taskNameInput).value,
//         // description: document.querySelector(
//         //   userSelectors.listWithTaskDescriptions
//         // ).value,
//       };
//     },
//     addListTask: function (item) {
//       // create li
//       const li = document.createElement("li");
//       li.className = "task-list";
//       li.id = `item-${item.it}`;
//       li.innerHTML = `${item.id}. ${item.name}
//         <i class="fas fa-edit"></i> <i class="fas fa-trash"></i></span>`;
//       // insert item
//       document
//         .querySelector(userSelectors.listWithTasks)
//         .insertAdjacentElement("beforeend", li);
//       // clear input after submit
//       document.querySelector(userSelectors.taskNameInput).value = "";
//     },
//     clearEditState() {
//       document.querySelector(userSelectors.taskNameInput).value = "";
//     },
//     getSelectors: function () {
//       return userSelectors;
//     },
//   };
// })();

// // 3. APP MANAGER
// const appManager = (function (taskManager, userControl) {
//   // Load events
//   const loadEvents = function () {
//     // get user selectors
//     const userSelectors = userControl.getSelectors();
//     // event which adds task
//     document
//       .querySelector(userSelectors.addTaskBtn)
//       .addEventListener("click", addTaskSubmit);
//   };
//   // click on the edit icon
//   document
//     .querySelector(userSelectors.)
//     .addEventListener("click", taskUpdateSubmit);
//   // Add task submit method
//   const addTaskSubmit = function (e) {
//     // get form input from user controller
//     const userInput = userControl.getTaskInput();
//     if (userInput.name !== "") {
//       // add task
//       const newTask = taskManager.addTask(userInput.name);
//       //   console.log(userInput);
//       // add item to user interface
//       userControl.addListTask(newTask);
//       e.preventDefault();
//     }
//     // Update Item method
//     const taskUpdateSubmit = function (e) {
//       if (e.target.classList.contains("edit-item")) {
//         // get the task id
//         const listId = e.target.parentNode.parentNode;
//       }
//     };
//     e.preventDefault();
//   };
//   // public methods
//   return {
//     startApp: function () {
//       console.log("Initializing app....");
//       // fetch items from database
//       const todoItems = taskManager.getTasks();
//       // Fill in the list with items
//       userControl.fillTaskList(todoItems);
//       // load events function
//       loadEvents();
//     },
//   };
// })(taskManager, userControl);

// // Start the app
// appManager.startApp();
