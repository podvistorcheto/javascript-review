"use strict";

// select the elements for the DOM
const form = document.querySelector("#itemForm");
const inputItem = document.querySelector("#itemInput");
const itemsList = document.querySelector("#itemsList");
const filters = document.querySelector(".nav-item");

let todoItems = [];

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

        currentItem.isDone = currentItem.isDone ? false : true;
        todoItems.splice(itemIndex, 1, currentItem);
        setLocalStorage(todoItems);
      });
    }
  });
};

// step 4 get the list for the UI
const getList = function (todoItems) {
  itemsList.innerHTML = "";
  if (todoItems.length > 0) {
    todoItems.forEach((item) => {
      itemsList.insertAdjacentHTML(
        "beforeend",
        `<li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="title" data-time="${item.addedAt}">${item.name}</span> 
      <span>
          <a href="#" data-done><i class="bi bi-check-circle green"></i></a>
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
      const itemObj = {
        addedAt: new Date().getTime(),
        name: itemName,
        isDone: false,
      };
      todoItems.push(itemObj);
      setLocalStorage(todoItems);
    }
  });
  // load the items from LS
  getLocalStorage();
});
