// Storage Controller
// const StorageCtrl = (function(){

// })();

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
    updateItem: function (name, completed) {
      let found = null;
      data.items.forEach(function (item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.completed = completed;
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
      currentItem.completed = currentItem.completed ? false : true;
      data.items.splice(index, 1, currentItem);
      console.log(currentItem.completed);
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
    itemNameInput: ".item-name",
    itemCompletedStatus: ".item-completed",
  };
  // Fetch items from data structure
  return {
    populateItemList: function (items) {
      let html = "";
      items.forEach(function (item) {
        html += `<li class="list-group-item d-flex justify-content-between align-items-center" id="item-${item.id}">
                <p>${item.completed}<i class="mark-completed fas fa-check-circle"></i></p><strong>${item.name}</strong>
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
        "list-group-item d-flex justify-content-between align-items-center";
      // Add ID
      li.id = `item-${item.id}`;
      // Add html
      li.innerHTML = `<p>${item.completed}<i class="mark-completed fas fa-check-circle"></i></p><strong>${item.name}</strong>
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
          document.querySelector(
            `#${itemID}`
          ).innerHTML = `<p>${item.completed}<i class="mark-completed far fa-calendar-minus"></i></p><strong>${item.name}</strong>
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
          doneItem.classList.add("task-completed");
          isCompleted = doneItem.getElementsByTagName("p")[0].innerHTML =
            "(completed ✓)";
        }
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
    },
    showEditState: function () {
      document.querySelector(UISelectors.saveUpdateBtn).style.display =
        "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
    getSelectors: function () {
      return UISelectors;
    },
  };
})();

// App controller
const AppCtrl = (function (ItemCtrl, UICtrl) {
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
      const status = ItemCtrl.getItemById(id);
      // mark item as complete in data storage
      console.log(status.completed);
      const itemIsCompleted = ItemCtrl.markItem(status.id);
      // update item in UI
      UICtrl.markListItemCompleted(status.id);
    }
    e.preventDefault();
  };
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
})(ItemCtrl, UICtrl);

// Iniitialize the app
AppCtrl.init();
