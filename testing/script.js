"use strict";

// const test = true;
// console.log(true);
let addTaskInputValue;
let taskObject;
let todoItems = [];
let addTaskInput = document.getElementById("addtaskinput");
let addTaskBtn = document.getElementById("addtaskbtn");
let itemsList = document.querySelector("#itemsList");

// step 3 get local storage from the page
const getLocalStorage = function () {
  let webTask = localStorage.getItem("todoItems");
  if (webTask === "undefined" || webTask === null) {
    console.log(5);
  } else {
    todoItems = JSON.parse(webTask);
    console.log(6);
  }
  showTask(todoItems);
  console.log(8);
};

// Step 2 Store Items in LS
const setLocalStorage = function (todoItems) {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
  console.log(7);
};

// Step 1: Add task and store in LS
addTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addTaskInputValue = addTaskInput.value;
  if (addTaskInputValue.length === 0) {
    alert("Please add a task...");
  } else {
    taskObject = {
      id: Date.now(),
      name: addTaskInput.value,
      completed: false,
    };
    todoItems.push(taskObject);
    console.log(1);
    setLocalStorage(todoItems);
    console.log(2);
    addTaskInput.value = "";
    console.log(3);
  }
  // load the items from LS
  getLocalStorage();
  console.log(4);
});

// step 4 get the list for the UI
function showTask(todoItems) {
  if (todoItems == null) {
    console.log("no todos");
  } else {
    let html = "";
    let addedtasklist = document.getElementById("addedtasklist");
    for (let i = 0; i < todoItems.length; i++) {
      html += `<tr>
      <th><i class="far fa-check-square"></i></th>
      <td>${todoItems[i].name}</td>
      <td><button type="button"
      class="text-primary"><i class="fas fa-edit"></i>
      Edit</button></td>
      <td><button type="button"
      class="text-danger"><i class="fas fa-trash-alt"></i>
      Remove</button></td>
  </tr>`;
      addedtasklist.innerHTML = html;
      console.log(addedtasklist);
    }
  }
}

// Step 5 - Manage Items

// method to edit task
function edittask(id) {
  let saveindex = document.getElementById("saveindex");
  let addTaskBtn = document.getElementById("addtaskbtn");
  let savetaskbtn = document.getElementById("savetaskbtn");
  saveindex.value = id;
  // the lifecycle of webstaks does not starts by user clicking the
  // edit button
  let webTask = localStorage.getItem("todoItems");
  console.log(`Piece 3. Gets the the task from the LS to display it
  in the input for updating`);
  let taskObject = JSON.parse(webTask);
  console.log(`Piece 3.1. Parses the webtask value to its orginal format to
  show it in the tasklist`);
  addTaskInput.value = taskObject[id];
  for (let i = 0; i < taskObject.length; i++) {
    let taskForEdit = taskObject[i].id;
    console.log(taskForEdit);
  }

  console.log(`Piece 3.2. Targets the task by its index
  from the array of strings as stored in LS`);
  // these lines up
  addTaskBtn.style.display = "none";
  console.log("Piece 3.3. Removes the add task button");
  savetaskbtn.style.display = "block";
  console.log("Piece 3.4. Displays the update button instead of the add task");
}

// // save task
// let savetaskbtn = document.getElementById("savetaskbtn");
// savetaskbtn.addEventListener("click", function () {
//   console.log(`Pieces 4. Triggers the function by clicking the update button`);
//   let webTask = localStorage.getItem("localtask");
//   console.log(`Piece 4.1. Gets the the task from the LS to display it
//   in the input for updating`);
//   let taskObject = JSON.parse(webTask);
//   console.log(`Piece 4.2. Parses the webtask value to its orginal format to
//   show it in the tasklist`);
//   let saveindex = document.getElementById("saveindex").value;
//   console.log(0.1);
//   taskObject[saveindex] = addTaskInput.value;
//   console.log(0.2);
//   savetaskbtn.style.display = "none";
//   addTaskBtn.style.display = "block";
//   addTaskInput.value = "";
//   localStorage.setItem("localtask", JSON.stringify(taskObject));
//   console.log(0.3);
//   showTask();
// });

// // method to delete item
// function deleteitem(index) {
//   let webTask = localStorage.getItem("localtask");
//   let taskObject = JSON.parse(webTask);
//   taskObject.splice(index, 1);
//   localStorage.setItem("localtask", JSON.stringify(taskObject));
//   showTask();
// }
