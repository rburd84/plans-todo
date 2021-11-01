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
let listing;

// console.log(addDataLine);
// console.log({ sidebar, display });

// Input Form Add Task button Event Listener
// inputBtnAddTask.addEventListener("click", function () {
//   let todoItem = addData();
//   console.log(todoItem);
// });

// Input Add Task Button Event Listener
// Opens form to enter input to make todo
inboxAddTaskBtn.addEventListener("click", function (e) {
  const selectPrjContainer = document.querySelector(
    ".select-project-container"
  );
  selectPrjContainer.style.visibility = "visible";
  document.querySelector("#select-project").addEventListener("change", (e) => {
    listing = e.target.value;
    selectPrjContainer.style.visibility = "collapse";

    // Returns a string of list name
    console.log(listing);
  });
  // adds event listener to buttons to choose project, make dates, and choose priority
  inputControlsList.addEventListener("click", inputControlsEvent);
  addTaskForm.classList.toggle("hide");
  e.target.classList.toggle("hide");
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
// console.log(projCollapse);

// Manually make todo item
// const todo1 = new Todo("Call realtor");
// todo1.setDueDate("10/28/2021");
// todo1.notes = "I have updated my notes";

// Manually make todo item
// const todo2 = new Todo("Call bank");
// todo2.dueDate = new Date("10/05/2017").toUTCString();

class App {
  static init() {
    // Make a Project list to hold all projects
    const projectList = new ProjectList();

    // create new lists - Creates a single projects list
    projectList.addNewProjectList("List30");
    projectList.addNewProjectList("testing1");
    projectList.addNewProjectList("testing2");

    // Get a project list from project lists array
    projectList.getProjectFromList("List30");

    // Render todo to DOM
    // item.render();
    // item2.render();

    // inputBtnAddTask.addEventListener("click", item.render.bind(item2));

    // addTaskForm.addEventListener("click", (e) => {
    //   /*   Function needs to
    //     1. Make a todo
    //     2. Get input place into Todo title
    //     3. Get project list todo will belong to
    //     4. Add todo to proper list      */

    //   // It works where it accepts input finds list and places todo into the correct project
    //   // still must tweak
    //   item.addTodoToProjectList(listName.prj[listName.name]);
    // });

    addTaskForm.addEventListener("submit", (e) => {
      const newTodo = new Todo();

      const formText = document.getElementById("input-text");
      const selectVal = document.querySelector("#select-project");

      newTodo.title = formText.value;

      let item = new ProjectItem(newTodo);

      // Make an item to push into project list
      // element.addTodoToProjectList(#list[#list name]);
      item.addTodoToProjectList(
        projectList.getProjectFromList(listing).prj[listing]
      );
      // console.log(formText, listing);
      // console.log(newTodo);
      // console.log("Add form trying to submit");
      item.render();
      console.log(projectList);
      selectVal.selectedIndex = 0;
      formText.value = "";
      e.preventDefault();
    });

    document.addEventListener("DOMContentLoaded", () => {
      const prjDisplay = document.getElementById("project-display-list");
      for (const prj of projectList.projects) {
        console.log(Object.keys(prj));
      }
      console.log(projectList);
      console.log("Live");
    });

    // addTaskForm.addEventListener("click", addData);
  }
}

App.init();
