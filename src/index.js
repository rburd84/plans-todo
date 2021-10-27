import "../scss/main.scss";
import "/node_modules/bootstrap/scss/bootstrap.scss";
import Todo from "./components/Todo";
import Project from "./components/Project";

const projCollapse = document.getElementById("project-collapse");
const addTask = document.getElementById("add-task");
const btnToggler = document.querySelector(".btn-toggle");
const biPlus = document.querySelector(".project-data .bi-plus");
const sidebar = document.querySelector(".sidebar");
const display = document.querySelector(".display");
const modal = document.querySelector(".modal");
const addTaskForm = document.getElementById("add-task-form");
const inboxAddTaskBtn = document.getElementById("inbox-add-task");
const inputBtnAddTask = document.getElementById("input-btn-add-task");
const formText = document.getElementById("input-text");
console.log(inboxAddTaskBtn);
// console.log({ sidebar, display });

// Input Form Add Task button Event Listener
inputBtnAddTask.addEventListener("click", function (e) {
  console.log(formText.value);
  console.log("clicking");
  e.preventDefault();
});

// Input Add Task Button Event Listener
inboxAddTaskBtn.addEventListener("click", function (e) {
  addTaskForm.classList.toggle("hide");
  e.target.classList.toggle("hide");
  console.log(e.target);
});

// Add new task event listeners
addTask.addEventListener("click", function () {
  modal.style.display = "block";
  console.log("Add a new task");
});

// Show and hide projects
btnToggler.addEventListener("click", function (e) {
  projCollapse.classList.toggle("show");
  biPlus.classList.toggle("hide");
  // console.log("Something's clicking");
});

// Event listener to add new project
biPlus.addEventListener("click", function () {
  console.log("Add a new project");
});
// console.log(projCollapse);

const todo = new Todo(
  "Call realtor",
  "Looking for a new investment property",
  "11/08/21",
  "high",
  "none",
  ["check credit", "lower debt", "contack agent"]
);
console.log(todo);

const proj = new Project();
console.log(proj);
