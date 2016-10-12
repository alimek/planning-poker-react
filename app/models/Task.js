class Task {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static fromCreatedTaskEvent({ id, name }) {
    return new Task(id, name);
  }
}

export default Task;
