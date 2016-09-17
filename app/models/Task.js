import { observable } from 'mobx';

class Task {
  constructor() {
    this.id = observable(null);
    this.name = observable(null);
  }
}

export default Task;
