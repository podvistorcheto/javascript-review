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
                    <th scope="row">${index + 1}</th>
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