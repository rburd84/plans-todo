export default class Todo {
  description = undefined;
  dueDate = null;
  priority = ["low", "normal", "urgent", "emergency"];
  notes = undefined;
  checklist = [];
  constructor(title) {
    this.title = title;
  }

  // get notes() {
  //   return this.notes;
  // }

  setDescription(value) {
    this.description = value;
  }

  setDueDate(value) {
    this.dueDate = new Date(value).toUTCString();
  }

  setNotes(value) {
    this.notes = value;
  }

  addToCheckList(val) {
    this.checklist.push(val);
  }
}
