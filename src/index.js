document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;
    taskItem.style.color = getPriorityColor(priority);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    form.reset();
  });

  function getPriorityColor(priority) {
    switch(priority) {
      case "high":
        return "red";
      case "medium":
        return "yellow";
      case "low":
        return "green";
      default:
        return "black";
    }
  }
});
