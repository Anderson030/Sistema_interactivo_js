const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  let pending = 0;

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
      <span>${task.text}</span>
      <div class="task-buttons">
        <button onclick="toggleComplete(${index})">✔</button>
        <button onclick="deleteTask(${index})">🗑</button>
      </div>
    `;
    taskList.appendChild(li);
    if (!task.completed) pending++;
  });

  taskCount.textContent = `Tareas pendientes: ${pending}`;
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return alert("La tarea no puede estar vacía.");
  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

renderTasks();
