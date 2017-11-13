class Task {
  constructor(id, name, status) {
    this.id = id;
    this.name = name;
    this.votes = [];
    this.status = status;
  }

  static fromCreatedTaskEvent({ id, name, status }) {
    return new Task(id, name, status);
  }
}

export default Task;
