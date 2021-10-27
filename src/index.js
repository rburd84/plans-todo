import "../scss/main.scss";
import "/node_modules/bootstrap/scss/bootstrap.scss";
import Todo from "./components/Todo";
import Project from "./components/Project";
import addData from "./components/functions";

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
const addDataLine = document.getElementById("add-data-line");
console.log(addDataLine);
// console.log({ sidebar, display });

// Form Line input edit event listener
formEditList.addEventListener("click", function (e) {
  if (e.target.classList.contains("bi-pencil")) {
    console.log("Pencil licked");
  } else if (e.target.classList.contains("bi-calendar3-event")) {
    console.log("Calendar clicked");
  } else if (e.target.classList.contains("bi-chat-square")) {
    console.log("Chat square clicked");
  } else if (e.target.classList.contains("bi-three-dots")) {
    console.log("Three dots clicked");
  }
});

// Add Data to DOM function

// function addData(e) {
//   const formEditList = document.getElementById("form-edit-list");
//   const row = document.createElement("tr");
//   row.innerHTML = `
//       <td>
//         <div id="line-item">
//           <div class="form-check">
//             <input
//               class="form-check-input"
//               type="radio"
//               name="flexRadioDefault"
//               id="flexRadioDefault1"
//             />
//             <label
//               class="form-check-label"
//               for="flexRadioDefault1"
//             >
//               Call mom
//             </label>
//           </div>
//           <div class="form-edits">
//             <ul class="navbar-nav" id="form-edit-list">
//               <li class="nav-item">
//                 <a href="#" class="nav-link">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     class="bi bi-pencil"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
//                     />
//                   </svg>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a href="#" class="nav-link">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     class="bi bi-calendar3-event"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
//                     />
//                     <path
//                       d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
//                     />
//                   </svg>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a href="#" class="nav-link">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     class="bi bi-chat-square"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
//                     />
//                   </svg>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a href="#" class="nav-link">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     class="bi bi-three-dots"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
//                     />
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </td>
//   `;
//   console.log(formText.value);
//   console.log(row);
//   e.preventDefault();
// }

// Input Form Add Task button Event Listener
inputBtnAddTask.addEventListener("click", addData);

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
