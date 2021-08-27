"use script";

// const test = true;
// console.log(test);

// defining the elements
const addTaskBox = document.querySelector(".addNewTask input");
const addTaskBtn = document.querySelector(".addNewTask button");
const taskList = document.querySelector(".taskList");
let createNewTask;

addTaskBox.onkeyup = () => {
  let userInput = addTaskBox.value; // gets the users input
  if (userInput.trim() != 0) {
    // if user input not blank
    addTaskBtn.classList.add("active");
  } else {
    addTaskBtn.classList.remove("active");
  }
};

displayTasks();

// configuring the local data storage in the browser
addTaskBtn.onclick = () => {
  let userInput = addTaskBox.value; // gets the users input
  let getLocalStorage = localStorage.getItem("New Task"); // to get the local data from the browser
  if (getLocalStorage == null) {
    taskListArr = []; // create an empty array
  } else {
    taskListArr = JSON.parse(getLocalStorage); // turns the JSON string to a js object
  }
  taskListArr.push(userInput); // adds or push the user input
  localStorage.setItem("New Task", JSON.stringify(taskListArr)); // turns the js object to JSON string
  displayTasks();
};

// method to create new task and fill the task list with data
function displayTasks() {
  // to get the local data from the browser
  let getLocalStorage = localStorage.getItem("New Task");
  // if there is no local storage
  if (getLocalStorage == null) {
    // create a blank array
    taskListArr = [];
  } else {
    // turn the JSON string to a js object
    taskListArr = JSON.parse(getLocalStorage);
  }
  let createNewTask = Array();
  taskListArr.forEach((element, index) => {
    createNewTask += `<i class="fas fa-edit"></i><li>${element}<span onclick="removeTask(${index})";>
    <i class="fas fa-trash"></i></span>
    </li>`;
  });
  // add new task
  taskList.innerHTML = createNewTask;
  // make the add task field blank after task is added
  addTaskBox.value = "";
}

// update task
function updateTask(index) {
  let getLocalStorage = localStorage.getItem("New Task");
  taskListArr = JSON.parse(getLocalStorage);
  console.log(taskListArr);
}
updateTask();

// delete task method
function removeTask(element, index) {
  let getLocalStorage = localStorage.getItem("New Task");
  taskListArr = JSON.parse(getLocalStorage);
  // remove the task
  taskListArr.splice(index, 1);
  // then update data in local storage
  localStorage.setItem("New Task", JSON.stringify(taskListArr));
  // show updated list with tasks
  displayTasks();
}
