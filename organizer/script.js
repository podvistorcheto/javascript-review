"use script";

// const test = true;
// console.log(test);

// defining the elements
const addTaskBox = document.querySelector(".addNewTask input");
const addTaskBtn = document.querySelector(".addNewTask button");

addTaskBox.onkeyup = () => {
  let userInput = addTaskBox.value; // gets the users input
  if (userInput.trim() != 0) {
    // if user input not blank
    addTaskBtn.classList.add("active");
  } else {
    addTaskBtn.classList.remove("active");
  }
};

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
};
