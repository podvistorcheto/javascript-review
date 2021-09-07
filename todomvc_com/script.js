"use strict";

// select the elements for the DOM
const form = document.querySelector("#itemForm");
const inputItem = document.querySelector("#itemInput");
const itemsList = document.querySelector("#itemsList");
const filters = document.querySelector(".nav-item");

let todoItems = [];

// step 6.1
const updateItem = function (currentItemIndex, value) {
  const newItem = todoItems[currentItemIndex];
  newItem.name = value;
  todoItems.splice(currentItemIndex, 1, newItem);
  setLocalStorage(todoItems);
};

// step 7.1
const removeItem = function (item) {
  const removeIndex = todoItems.indexOf(item);
  todoItems.splice(removeIndex, 1);
};

// step 5 manage the items
const handleItem = function (itemData) {
  const items = document.querySelectorAll(".list-group-item");
  items.forEach((item) => {
    if (
      item.querySelector(".title").getAttribute("data-time") == itemData.addedAt
    ) {
      // mark item as completed
      item.querySelector("[data-done]").addEventListener("click", function (e) {
        e.preventDefault();
        // alert("Hi!");
        const itemIndex = todoItems.indexOf(itemData);
        const currentItem = todoItems[itemIndex];
        const currentClass = currentItem.isDone
          ? "bi-check-circle-fill"
          : "bi-check-circle";
        currentItem.isDone = currentItem.isDone ? false : true;
        todoItems.splice(itemIndex, 1, currentItem);
        setLocalStorage(todoItems);
        const iconClass = currentItem.isDone
          ? "bi-check-circle-fill"
          : "bi-check-circle";
        this.firstElementChild.classList.replace(currentClass, iconClass);
      });
      // step 6 edit task
      item.querySelector("[data-edit]").addEventListener("click", function (e) {
        e.preventDefault();
        inputItem.value = itemData.name;
        document.querySelector("#objIndex").value = todoItems.indexOf(itemData);
      });
      // step 7 delete task
      item
        .querySelector("[data-delete]")
        .addEventListener("click", function (e) {
          e.preventDefault();
          if (confirm("Please confirm to delete this task...")) {
            itemsList.removeChild(item);
            removeItem(item);
            setLocalStorage(todoItems);
            return todoItems.filter((item) => item != itemData);
          }
        });
    }
  });
};

// step 4 get the list for the UI
const getList = function (todoItems) {
  itemsList.innerHTML = "";
  if (todoItems.length > 0) {
    todoItems.forEach((item) => {
      const iconClass = item.isDone
        ? "bi-check-circle-fill"
        : "bi-check-circle";
      itemsList.insertAdjacentHTML(
        "beforeend",
        `<li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="title" data-time="${item.addedAt}">${item.name}</span> 
      <span>
          <a href="#" data-done><i class="bi ${iconClass} green"></i></a>
          <a href="#" data-edit><i class="bi bi-pencil-square blue"></i></a>
          <a href="#" data-delete><i class="bi bi-x-circle red"></i></a>
      </span>
    </li>`
      );
      handleItem(item);
    });
  }
};

// step 3 get local storage from the page
const getLocalStorage = function () {
  const todoStorage = localStorage.getItem("todoItems");
  if (todoStorage === "undefined" || todoStorage === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(todoStorage);
  }
  getList(todoItems);
};

// Step 2 - store items to local storage
const setLocalStorage = function (todoItems) {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
};

// Step 1: Add item
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const itemName = inputItem.value.trim();
    if (itemName.length === 0) {
      alert("Please enter name...");
    } else {
      const currentItemIndex = document.querySelector("#objIndex").value;
      if (currentItemIndex) {
        // update item
        updateItem(currentItemIndex, itemName);
        document.querySelector("#objIndex").value = "";
      } else {
        const itemObj = {
          addedAt: new Date().getTime(),
          name: itemName,
          isDone: false,
        };
        todoItems.push(itemObj);
        setLocalStorage(todoItems);
      }
      getList(todoItems);
    }
    inputItem.value = "";
  });
  // load the items from LS
  getLocalStorage();
});
