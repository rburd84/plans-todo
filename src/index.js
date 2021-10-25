import "../scss/main.scss";
import "/node_modules/bootstrap/scss/bootstrap.scss";
import Todo from "./components/Todo";
import Project from "./components/Project";

const projCollapse = document.getElementById("project-collapse");
const btnToggler = document.querySelector(".btn-toggle");
const biPlus = document.querySelector(".project-data .bi-plus");
console.log(biPlus);

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
