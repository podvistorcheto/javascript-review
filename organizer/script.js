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
