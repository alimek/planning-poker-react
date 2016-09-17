import { observable } from 'mobx';

class Game {
  constructor() {
    this.id = observable(null);
    this.name = observable(null);
    this.tasks = observable([]);
    this.players = observable([]);
    this.status = observable(null);
  }

  fromResponse(data) {
    this.id.set(data.id);
    this.name.set(data.name);
    this.status.set(data.status);
    this.tasks.replace(data.tasks);
  }

  logout() {

  }
}

export default Game;
