"use strict";

//const { doc } = require("prettier");

// const test = true;
// console.log(true);

(function () {
  // Adding the elements
  var lastId = 0;
  var taskWrapper = document.getElementById("task_wrapper");
  var btnSave = document.getElementById("save_task");
  var removeIcon;
  var updateIcon;
  var taskList;

  // Start the app
  // Construct the task list
  //  render the list
  // Add event handler for the save button
  function init() {
    if (!!window.localStorage.getItem("taskList")) {
      taskList = JSON.parse(window.localStorage.getItem("taskList"));
    } else {
      taskList = [];
    }
    console.log(taskList);
    btnSave.addEventListener("click", saveTask);
    console.log("Initializing app....");
    showList();
  }

  // fin de init

  // CRUD methods

  // method to show the list
  function showList() {
    if (taskList.length) {
      getLastTaskId();
      console.log(taskList.length);
      for (var item in taskList) {
        var task = taskList[item];
        addTaskToList(task);
      }
      syncEvents();
    }
  }

  function saveTask(event) {
    var task = {
      taskId: lastId,
      taskDes: document.getElementById("task-name").value,
      taskState: document.getElementById("task-status").value,
    };
    console.log(task);
    // if (taskInput.value === "" || taskStatus.value === "") {
    //   alert("Add a task");
    // } else {
    taskList.push(task);
    console.log(task);
    syncTask();
    addTaskToList(task);
    syncEvents();
    lastId++;
    console.log(lastId);
    //   taskInput.value = "";
    //   taskStatus.value = "";
  }

  function addTaskToList(task) {
    var element = document.createElement("li");
    var removeIcon = document.createElement("span");
    var updateIcon = document.createElement("span");

    removeIcon.innerHTML = `<i class="far fa-trash-alt"></i>`;
    removeIcon.className = "remove_item btn btn-danger";
    removeIcon.setAttribute("title", "Remove");

    updateIcon.innerHTML = `<i class="far fa-edit"></i>`;
    updateIcon.className = "update_icon btn btn-warning";
    updateIcon.setAttribute("title", "Update");

    element.appendChild(updateIcon);
    element.appendChild(removeIcon);
    element.setAttribute("id", task.taskId);
    element.innerHTML += task.taskDes;
    taskWrapper.appendChild(element);
  }

  // TO-DO mark task as completed

  function updateTask(event) {
    var taskTag = event.currentTarget.parentNode;
    console.log(taskTag);
    var taskId = taskTag.id;
    console.log(taskId);
    var taskToUpdate = findTask(taskId).task;
    console.log(taskToUpdate);
    var pos = findTask(taskId).pos;
    console.log(pos);
    if (taskToUpdate) {
      var des = prompt("Task Description", taskToUpdate.taskDes);
      var state = prompt("Task State", taskToUpdate.taskState);
      taskToUpdate.taskDes = des;
      taskToUpdate.taskState = state;
      taskList[pos] = taskToUpdate;
      taskTag.lastChild.textContent = taskToUpdate.taskDes;
      syncTask();
    }
  }

  function removeTask(event) {
    var taskToRemove = event.currentTarget.parentNode;
    var taskId = taskToRemove.id;
    taskWrapper.removeChild(taskToRemove);
    taskList.forEach(function (value, i) {
      if (value.taskId == taskId) {
        taskList.splice(i, 1);
      }
    });
    syncTask();
  }

  // Local Storage set up
  function syncTask() {
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    taskList = JSON.parse(window.localStorage.getItem("taskList"));
  }

  function getLastTaskId() {
    var lastTask = taskList[taskList.length - 1];
    lastId = lastTask.taskId + 1;
  }

  function syncEvents() {
    updateIcon = document.getElementsByClassName("update_icon");
    removeIcon = document.getElementsByClassName("remove_item");
    if (!!removeIcon.length) {
      for (var i = 0; i < removeIcon.length; i++) {
        removeIcon[i].addEventListener("click", removeTask);
      }
    }
    if (!!updateIcon.length) {
      for (var j = 0; j < updateIcon.length; j++) {
        updateIcon[j].addEventListener("click", updateTask);
      }
    }
  }
  function findTask(id) {
    var response = {
      task: "",
      pos: 0,
    };
    taskList.forEach(function (value, i) {
      if (value.taskId == id) {
        response.task = value;
        response.pos = i;
      }
    });
    return response;
  }

  init();
})(); // close function
