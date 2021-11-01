import Todo from "./Todo";

// Add Data to DOM function
// export default function addData() {
//   //   /*   Function needs to
//   //     1. Make a todo
//   //     2. Get input place into Todo title
//   //     3. Get project list todo will belong to
//   //     4. Add todo to proper list      */

//   const newTodo = new Todo();

//   const formText = document.getElementById("input-text");
//   const selectVal = document.getElementById("select-project");

//   console.log(formText, listing);
//   console.log(newTodo);
//   let item;
// }

export function checkInput(e) {
  if (e.target.classList.contains("bi-pencil")) {
    console.log("Pencil licked");
  } else if (e.target.classList.contains("bi-calendar3-event")) {
    console.log("Calendar clicked");
  } else if (e.target.classList.contains("bi-chat-square")) {
    console.log("Chat square clicked");
  } else if (e.target.classList.contains("bi-three-dots")) {
    console.log("Three dots clicked");
  }
}

/*    */
export function inputControlsEvent(e) {
  // Makes project selection box reappear on click
  if (e.target.classList.contains("add-project-prj")) {
    const selectPrjContainer = document.querySelector(
      ".select-project-container"
    );
    const selectPrj = document.getElementById("select-project");
    selectPrjContainer.style.visibility = "visible";
  }

  e.preventDefault();
}

export function addProjectTodo() {
  let prj = prompt("please choose a project");

  return prj;
}
