// Storage Controller
const StorageCtrl = (function () {
  // public methods
  return {
    storeItem: function (item) {
      let items;
      // Check if any items in local storage
      if (localStorage.getItem("items") === null) {
        items = [];
        // push new item
        items.push(item);
        // set it to LS
        localStorage.setItem("items", JSON.stringify(items));
      } else {
        // Load existing data from LS
        items = JSON.parse(localStorage.getItem("items"));
        // push new item
        items.push(item);
        // reset the LS
        localStorage.setItem("items", JSON.stringify(items));
      }
    },
    getItemsFromStorage: function () {
      let items;
      if (localStorage.getItem("items") === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem("items"));
      }
      return items;
    },
    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem("items"));

      items.forEach(function (item, index) {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem("items", JSON.stringify(items));
    },
    markCompleteItemStorage: function (isComplete) {
      let items = JSON.parse(localStorage.getItem("items"));

      items.forEach(function (item, index) {
        if (isComplete.id === item.id) {
          items.splice(index, 1, isComplete);
        }
      });
      localStorage.setItem("items", JSON.stringify(items));
    },
    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem("items"));

      items.forEach(function (item, index) {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem("items", JSON.stringify(items));
    },
  };
})();

// Items Controller
const ItemCtrl = (function () {
  // build the item that use for the data structure
  const Item = function (id, name, completed) {
    this.id = id;
    this.name = name;
    this.completed = completed;
  };
  // data structure / state
  const data = {
    items: [
      // {id: 0, name: 'Task One', completed:false},
      // {id: 1, name: 'Task Two', completed:false},
      // {id: 2, name: 'Task Three', completed:false}
    ],
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
  };

  // Public method to log the data in the DOM
  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, completed) {
      let ID;
      // Create ID with auto increment
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // switch completed to boolean
      // completed = false;
      // Create new item
      newItem = new Item(ID, name, completed);
      // add to items array
      data.items.push(newItem);
      return newItem;
    },
    getItemFilter: function (type) {
      let filterItems = data.items;
      switch (type) {
        case "active":
          filterItems = data.items.filter((item) => !item.completed);
          break;
        case "completed":
          filterItems = data.items.filter((item) => item.completed);
          // let completedClass = "";
          // let completeItemMarked = "";
          // if (item.completed) {
          //   completedClass = "task-completed";
          //   completeItemMarked = "(completed ✓)";
          // }
          break;
        default:
          filterItems = data.items;
      }
      UICtrl.populateItemList(filterItems);
    },
    getItemById: function (id) {
      let found = null;
      // loop through the items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    updateItem: function (name) {
      let found = null;
      data.items.forEach(function (item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          found = item;
        }
      });
      return found;
    },
    markItem: function (completed) {
      //get the ids
      const completes = data.items.map(function (item) {
        return item.id;
      });
      const index = completes.indexOf(completed);
      const currentItem = data.items[index];
      console.log(currentItem.completed);
      currentItem.completed = currentItem.completed ? false : true;
      data.items.splice(index, 1, currentItem);
      console.log(currentItem.completed);
    },
    deleteItem: function (id) {
      // find the id for the items
      deleteIds = data.items.map(function (item) {
        return item.id;
      });
      // get the item index
      const deleteIndex = deleteIds.indexOf(id);
      // remove item
      data.items.splice(deleteIndex, 1);
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    listItems: "#item-list li",
    doneItems: "#item-list li",
    addBtn: ".add-btn",
    updateBtn: ".edit-item",
    saveUpdateBtn: "#savetaskbtn",
    markBtn: ".mark-completed",
    deleteBtn: "#deletetaskbtn",
    itemNameInput: ".item-name",
    itemCompletedStatus: ".item-completed",
    filters: ".nav-item",
  };
  // Fetch items from data structure
  return {
    populateItemList: function (items) {
      let html = "";
      items.forEach(function (item) {
        // let completedClass = "";
        // let completeItemMarked = "";
        // if (item.completed) {
        //   completedClass = "task-completed";
        //   completeItemMarked = "(completed ✓)";
        // // }
        const statusCompleted = item.completed
          ? "list-group-item-success"
          : "list-group-item-light";
        const iconCompleted = item.completed
          ? "bi-check-circle-fill"
          : "bi-check-circle";
        html += `<li class="list-group-item ${statusCompleted} d-flex justify-content-between align-items-center" id="item-${item.id}">
                      <p>${item.completed}<i class="mark-completed bi ${iconCompleted}"></i></p><strong>${item.name}</strong>
                      <span class="badge badge-success badge-pill"><i class="edit-item fas fa-edit"></i>
                    </li>`;
      });
      // insert list with items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        completed: (document.querySelector(
          UISelectors.itemCompletedStatus
        ).value = false),
      };
    },
    addListItem: function (item) {
      // create li element
      const li = document.createElement("li");
      // Add classes
      li.className =
        "list-group-item list-group-item-light d-flex justify-content-between align-items-center";
      // Add ID
      li.id = `item-${item.id}`;
      // Add html
      const iconCompleted = item.completed
        ? "bi-check-circle-fill"
        : "bi-check-circle";
      li.innerHTML = `<p>${item.completed}<i class="mark-completed bi ${iconCompleted}"></i></p><strong>${item.name}</strong>
                    <span class="badge badge-success badge-pill"><i class="edit-item fas fa-edit"></i></span>`;
      // insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },

    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // convert listItems from node list to array
      listItems = Array.from(listItems);

      listItems.forEach(function (listItem) {
        const itemID = listItem.getAttribute("id");
        if (itemID === `item-${item.id}`) {
          const iconCompleted = item.completed
            ? "bi-check-circle-fill"
            : "bi-check-circle";
          document.querySelector(
            `#${itemID}`
          ).innerHTML = `<p>${item.completed}<i class="mark-completed fas ${iconCompleted}"></i></p><strong>${item.name}</strong>
                    <span class="badge badge-success badge-pill"><i class="edit-item fas fa-edit"></i></span>`;
        }
      });
    },
    markListItemCompleted: function (item) {
      let doneItems = document.querySelectorAll(UISelectors.doneItems);
      doneItems = Array.from(doneItems);
      doneItems.forEach(function (doneItem) {
        let isCompleted = doneItem.getElementsByTagName("p")[0];
        if (doneItem.id === "item-" + item) {
          doneItem.style.color = "green";
          doneItem.classList.add("task-completed");
        } else {
          doneItem.style.color = "black";
          doneItem.classList.remove("task-completed");
        }
      });
      const filterValues = document.querySelector("#filter-types");
      ItemCtrl.getItemFilter(filterValues);
    },
    deleteListItem: function (id) {
      const targetIdDelete = `#item-${id}`;
      const selectIdDelete = document.querySelector(targetIdDelete);
      selectIdDelete.remove();
    },
    filterTabs: function () {
      let filterItems = document.querySelectorAll(".nav-item");
      console.log(filterItems);
      filterItems.forEach((tab) => {
        tab.addEventListener("click", function (e) {
          e.preventDefault();
          const tabType = this.getAttribute("data-type");
          document.querySelectorAll(".nav-link").forEach(function (nav) {
            nav.classList.add("active");
          });
          this.firstElementChild.classList.add("active");
          ItemCtrl.getItemFilter(tabType);
          document.querySelector("#filter-types").value = tabType;
        });
      });
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCompletedStatus).value = "";
    },
    addItemToForm: function () {
      UICtrl.showEditState();
      document.querySelector(UISelectors.itemNameInput).value =
        ItemCtrl.getCurrentItem().name;
    },
    clearEditState: function () {
      document.querySelector(UISelectors.saveUpdateBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
    },
    showEditState: function () {
      document.querySelector(UISelectors.saveUpdateBtn).style.display =
        "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
    getSelectors: function () {
      return UISelectors;
    },
  };
})();

// App controller
const AppCtrl = (function (ItemCtrl, StorageCtrl, UICtrl) {
  UICtrl.clearEditState();
  // create event listeners
  const loadEventListeners = function () {
    // variable to use the getSelectors from UICtrl in AppCtrl
    const UISelectors = UICtrl.getSelectors();
    // Add item event to Data Storage
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);
    // Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemUpdateClick);
    // Edit item submit event
    document
      .querySelector(UISelectors.saveUpdateBtn)
      .addEventListener("click", itemUpdateSubmit);
    // mark completed event
    document
      .querySelector(UISelectors.markBtn)
      .addEventListener("click", itemMarkComplete);
    // delete item
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener("click", itemDeleteSubmit);
    // filter tabs
    document
      .querySelector(UISelectors.filters)
      .addEventListener("click", UICtrl.filterTabs());
  };

  // add item submit method from the event listener
  const itemAddSubmit = function (e) {
    // get item input from UICtrl
    const input = UICtrl.getItemInput();
    // check for user input
    if (input.name !== "") {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.completed);
      UICtrl.addListItem(newItem);
      // Store in localStorage
      StorageCtrl.storeItem(newItem);
      // Clear input fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  // Update item click
  const itemUpdateClick = function (e) {
    if (e.target.classList.contains("edit-item")) {
      // Get list item ID
      const listId = e.target.parentNode.parentNode.id;
      // break into an array
      const listIdArr = listId.split("-");
      // get the actual id of the item
      const id = parseInt(listIdArr[1]);
      // get item
      const itemToEdit = ItemCtrl.getItemById(id);
      // set current item
      ItemCtrl.setCurrentItem(itemToEdit);
      // Add item to form
      UICtrl.addItemToForm();
      //
    }
    e.preventDefault();
  };

  const itemUpdateSubmit = function (e) {
    // Get item input
    const input = UICtrl.getItemInput();
    // update the item in the data storage
    const updatedItem = ItemCtrl.updateItem(input.name, input.completed);
    // update item in the UI
    UICtrl.updateListItem(updatedItem);

    // update in localStorage
    StorageCtrl.updateItemStorage(updatedItem);
    // clear views
    UICtrl.clearEditState();
    UICtrl.clearInput();
    e.preventDefault();
  };

  const itemMarkComplete = function (e) {
    // get the item to complete it
    if (e.target.classList.contains("mark-completed")) {
      const listId = e.target.parentNode.parentNode.id;
      const listIdArr = listId.split("-");
      const id = parseInt(listIdArr[1]);
      // get list item completed status
      const isComplete = ItemCtrl.getItemById(id);
      // mark item as complete in data storage
      const itemIsCompleted = ItemCtrl.markItem(isComplete.id);
      // update item in UI
      UICtrl.markListItemCompleted(isComplete.id);
      StorageCtrl.markCompleteItemStorage(isComplete);
      console.log(isComplete);
    }
    e.preventDefault();
  };

  const itemDeleteSubmit = function (e) {
    // get current item
    const currnetItem = ItemCtrl.getCurrentItem();
    // delete item from data structure
    ItemCtrl.deleteItem(currnetItem.id);
    // Delete from the UI
    UICtrl.deleteListItem(currnetItem.id);
    // delete from LS
    StorageCtrl.deleteItemFromStorage(currnetItem.id);
    // clear the views
    UICtrl.clearEditState();
    UICtrl.clearInput();
    e.preventDefault();
  };

  // const filterItemTabs = function (e) {
  //   const filterIist = ItemCtrl.getItems();
  //   UICtrl.filterTabs(items);
  // };

  // Public methods to start the app with all features from ItemCtrl and UICtrl
  return {
    init: function () {
      // load the items
      const items = ItemCtrl.getItems();
      // Populate list with the items
      UICtrl.populateItemList(items);
      // load event listeners
      loadEventListeners();
    },
  };
})(ItemCtrl, StorageCtrl, UICtrl);

// Iniitialize the app
AppCtrl.init();
