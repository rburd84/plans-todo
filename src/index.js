import "../scss/main.scss";
import "/node_modules/bootstrap/scss/bootstrap.scss";
import Todo from "./components/Todo";
import { ProjectList } from "./components/Project";
import { ProjectItem } from "./components/Project";
import addData, { addProjectTodo } from "./components/functions";
import { inputControlsEvent } from "./components/functions";

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
const inputControlsList = document.getElementById("input-controls-list");
const addProjectList = document.getElementById("add-project-list");
const selectVal = document.querySelector("#select-project");
export const selectPrjContainer = document.querySelector(
  ".select-project-container"
);

// Input Form Add Task button Event Listener
// inputBtnAddTask.addEventListener("click", function () {
//   let todoItem = addData();
//   console.log(todoItem);
// });

// Input Add Task Button Event Listener
// Opens form to enter input to make todo
inboxAddTaskBtn.addEventListener("click", function (e) {
  // adds event listener to buttons to choose project, make dates, and choose priority
  inputControlsList.addEventListener("click", inputControlsEvent);
  addTaskForm.classList.toggle("hide");
  e.target.classList.toggle("hide");
  selectPrjContainer.classList.toggle("visible");

  selectVal.selectedIndex = 0;
  // console.log(e.target);
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

class App {
  static init() {
    let listing;
    // Make a Project list to hold all projects
    const projectList = new ProjectList();

    // create new lists - Creates a single projects list
    projectList.addNewProjectList("List30");
    projectList.addNewProjectList("testing1");
    projectList.addNewProjectList("testing2");

    // Get a project list from project lists array
    const list30 = projectList.getProjectFromList("List30");
    const testing1 = projectList.getProjectFromList("testing1");
    const testing2 = projectList.getProjectFromList("testing2");
    console.log({ list30, testing1, testing2 });

    // Select Element Event Listener
    // Gets and returns which select element was chosen
    // Returns select element to original state
    document
      .querySelector("#select-project")
      .addEventListener("change", (e) => {
        listing = e.target.value;
        selectPrjContainer.style.visibility = "collapse";

        // Returns a string of list name
        return listing;
      });

    // Form Event listener to make TODO
    addTaskForm.addEventListener("submit", (e) => {
      const newTodo = new Todo();

      const formText = document.getElementById("input-text");
      // const selectVal = document.querySelector("#select-project");

      newTodo.title = formText.value;

      let item = new ProjectItem(newTodo);

      // Make an item to push into project list
      item.addTodoToProjectList(projectList.getProjectFromList(listing));
      // console.log(projectList);
      // console.log(formText, listing);
      // console.log(projectList.getProjectFromList(listing));

      item.render("add-data-line");
      // console.log(projectList.getProjectFromList(Object.keys(listing)));
      // console.log(item.addTodoToProjectList(listing));
      // selectVal.selectedIndex = 0;
      formText.value = "";
      // selectPrjContainer.classList.toggle("visible");
      selectVal.selectedIndex = 0;

      e.preventDefault();
    });

    // Loops through projects and prints project list to DOM
    document.addEventListener("DOMContentLoaded", () => {
      const prjDisplay = document.getElementById("project-display-list");

      for (let i = 0; i < projectList.projects.length; i++) {
        const li = document.createElement("li");
        let key = Object.keys(projectList.projects[i]).toString();
        li.id = `${key}-project`;
        li.innerHTML = `<a href="#" class="link-dark rounded">${key}</a>`;
        prjDisplay.appendChild(li);

        // Event Listener for each individual project
        document.getElementById(li.id).addEventListener("click", () => {
          console.log(`${li.id} clicked`);
        });
      }
    });
  }
}

App.init();
