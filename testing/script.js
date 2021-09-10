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
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: ".item-name",
    itemCompletedStatus: ".item-completed",
  };
  // Fetch items from data structure
  return {
    populateItemList: function (items) {
      let html = "";
      items.forEach(function (item) {
        html += `<li class="list-group-item d-flex justify-content-between align-items-center" id="item-${item.id}">
          <p>${item.completed}<i class="far fa-check-circle"></i></p><strong>${item.name}</strong>
          <span class="badge badge-success badge-pill"><i class="fas fa-edit"></i>
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
      li.innerHTML = `<p>${item.completed}<i class="far fa-check-circle"></i></p><strong>${item.name}</strong>
        <span class="badge badge-success badge-pill"><i class="fas fa-edit"></i></span>`;
      // insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCompletedStatus).value = "";
    },
    getSelectors: function () {
      return UISelectors;
    },
  };
})();

// App controller
const AppCtrl = (function (ItemCtrl, UICtrl) {
  // create event listeners
  const loadEventListeners = function () {
    // variable to use the getSelectors from UICtrl in AppCtrl
    const UISelectors = UICtrl.getSelectors();
    // Add item event to Data Storage
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);
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
  // Public methods to start the app with all features from ItemCtrl and UICtrl
  return {
    init: function () {
      console.log("App Initialiazed...");
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
