"use strict";

const test = true;
console.log(true);

// select the elements in html
const form = document.querySelector("#taskForm");
const inputTask = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const filterTask = document.querySelector(".nav-item");

let taskItems = [];

// 1. Initialize the add task form

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskName = inputTask.value.trim();
    if (taskName.length === 0) {
      // console.log(taskName);
    } else {
      let taskObject = {
        name: taskName,
        completed: false,
        id: new Date().getTime(),
      };
      taskItems.push(taskObject);
      addLocalStorage(taskItems);
    }
  });
  //  load task list
  getLocalStorage();
});

// 2. sent tasks to LS
const addLocalStorage = function (taskItems) {
  localStorage.setItem("taskItems", JSON.stringify(taskItems));
};

// 3. get tasks from LS
const getLocalStorage = function () {
  let taskStorage = localStorage.getItem("taskItems");
  if (taskStorage === "undefined" || taskStorage === null) {
    taskItems = [];
  } else {
    taskItems = JSON.parse(taskStorage);
  }
  console.log("tasks", taskItems);
  showList(taskItems);
};

// 4. show list to UI
const showList = function (taskItems) {
  taskList.innerHTML = "";
  if (taskItems.length > 0) {
    taskItems.forEach((task) => {
      taskList.insertAdjacentHTML(
        "beforeend",
        `<li class="list-group-item d-flex justify-content-between align-items-center">
          <a href="#" data-done><i class="fas fa-check-circle"></i></a>
          <span class="title" data-time="#">${task.name}</span> 
          <span>
            <a href="#" data-edit><i class="fas fa-edit coral"></i></a>
            <a href="#" data-delete><i class="fas fa-trash red"></i></a>
          </span>
        </li>`
      );
    });
  }
};

// 5. manage items (to be implemented....)
