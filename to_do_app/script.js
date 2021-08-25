"use script";

//var test = true;
//console.log(test);

const tudu = new (function () {
  this.el = document.getElementById("tasks");
  // create an empty array with the tasks
  this.tasks = [];

  this.FetchAll = function () {
    var taskListData = "";

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        taskListData += "<tr>";
        taskListData += "<td>" + (i + 1) + ". " + this.tasks[i] + "<td>";
        taskListData +=
          '<td><button onclick="tudu.updateTask(' +
          i +
          ')" class="btn btn-warning">Update</button></td> ';
        taskListData +=
          '<td><button onclick="tudu.removeTask(' +
          i +
          ')" class="btn btn-danger">Delete</button></td> ';
        taskListData += "</tr>";
      }
    }
    return (this.el.innerHTML = taskListData);
  };

  this.addTask = function () {
    el = document.getElementById("add-new-task");
    var task = el.value;
    if (task) {
      this.tasks.push(task.trim());
      this.el.value = "";
      console.log(el);
      this.FetchAll();
    }
  };

  this.updateTask = function (item) {
    el = document.getElementById("update-task");
    el.value = this.tasks[item];
    document.getElementById("update-form").style.display = "block";
    self = this;

    document.getElementById("save-update").onsubmit = function () {
      var task = el.value;
      if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.FetchAll();
        CloseInput();
      }
    };
  };

  this.removeTask = function (item) {
    this.tasks.splice(item, 1);
    this.FetchAll();
  };
})();

tudu.FetchAll();

function CloseInput() {
  document.getElementById("update-form").style.display = "none";
}
