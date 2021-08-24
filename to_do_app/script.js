"use script";

//var test = true;
//console.log(test);

const tudu = new (function () {
  this.element = document.getElementById("tasks");
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
    return (this.element.innerHTML = taskListData);
  };

  this.addTask = function () {
    element = document.getElementById("add-new-task");
    var task = element.value;
    if (task) {
      this.tasks.push(task.trim());
      element.value = "";
      this.FetchAll();
    }
  };

  this.updateTask = function () {};

  this.removeTask = function () {};
})();

tudu.FetchAll();

function CloseInput() {
  document.getElementById("update-form").style.display = "none";
}
