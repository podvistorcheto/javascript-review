"use strict";

// const test = true;
// console.log(true);

let addTaskInputValue;
let taskObject;
let addTaskInput = document.getElementById("addtaskinput");
let addTaskBtn = document.getElementById("addtaskbtn");

// load the task list
showTask();

// add task and store in LS
addTaskBtn.addEventListener("click", function () {
  addTaskInputValue = addTaskInput.value;
  if (addTaskInputValue.trim() != 0) {
    let webTask = localStorage.getItem("localtask");
    if (webTask == null) {
      taskObject = [];
    } else {
      taskObject = JSON.parse(webTask);
    }
    taskObject.push(addTaskInputValue);
    localStorage.setItem("localtask", JSON.stringify(taskObject));
    addTaskInput.value = "";
  }
  showTask();
});

// display tasks
function showTask() {
  let webTask = localStorage.getItem("localtask");
  if (webTask == null) {
    taskObject = [];
  } else {
    taskObject = JSON.parse(webTask);
  }
  let html = "";
  let addedtasklist = document.getElementById("addedtasklist");
  taskObject.forEach((item, index) => {
    html += `<tr>
                    <th><i class="far fa-check-square"></i></th>
                    <td>${item}</td>
                    <td><button type="button" onclick="edittask(${index})"
                    class="text-primary"><i class="fas fa-edit"></i>
                    Edit</button></td>
                    <td><button type="button" onclick="deleteitem(${index})"
                    class="text-danger"><i class="fas fa-trash-alt"></i>
                    Remove</button></td>
                </tr>`;
  });
  addedtasklist.innerHTML = html;
}

// method to edit task
function edittask(index) {
  let saveindex = document.getElementById("saveindex");
  let addTaskBtn = document.getElementById("addtaskbtn");
  let savetaskbtn = document.getElementById("savetaskbtn");
  saveindex.value = index;
  let webTask = localStorage.getItem("localtask");
  let taskObject = JSON.parse(webTask);
  addTaskInput.value = taskObject[index];
  addTaskBtn.style.display = "none";
  savetaskbtn.style.display = "block";
}

// save task
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function () {
  let webTask = localStorage.getItem("localtask");
  let taskObject = JSON.parse(webTask);
  let saveindex = document.getElementById("saveindex").value;
  taskObject[saveindex] = addTaskInput.value;
  savetaskbtn.style.display = "none";
  addTaskBtn.style.display = "block";
  addTaskInput.value = "";
  localStorage.setItem("localtask", JSON.stringify(taskObject));
  showTask();
});

// method to delete item
function deleteitem(index) {
  let webTask = localStorage.getItem("localtask");
  let taskObject = JSON.parse(webTask);
  taskObject.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskObject));
  showTask();
}

// clear all method
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function () {
  let savetaskbtn = document.getElementById("savetaskbtn");
  let addTaskBtn = document.getElementById("addtaskbtn");
  let webTask = localStorage.getItem("localtask");
  let taskObject = JSON.parse(webTask);
  if (taskObject == 0) {
    taskObject = [];
  } else {
    taskObject = JSON.parse(webTask);
    taskObject = [];
  }
  savetaskbtn.style.display = "none";
  addTaskBtn.style.display = "block";
  localStorage.setItem("localtask", JSON.stringify(taskObject));
  showTask();
});

// search box method
let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function () {
  let trlist = document.querySelector("tr");
  Array.from(trlist).forEach(function (item) {
    let searchedtext = item.getElementsByTagName("td")[0].innerText;
    let searchtextboxval = searchtextbox.value;
    let re = new RegExp(searchtextboxval, "gi");
    if (searchedtext.match(re)) {
      item.style.display = "table-row";
    } else {
      item.style.display = "none";
    }
  });
});
