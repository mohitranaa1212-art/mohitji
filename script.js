function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  // Click to mark as completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Right-click to delete
  li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = ""; // clear input
}
