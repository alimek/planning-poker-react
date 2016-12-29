import { observable } from 'mobx';
import User from '../models/User';

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
    data.players.map((playerObj) => {
      const player = User.createFromPlayerObj(playerObj);
      this.addPlayer(player);
      return player;
    });
  }

  addPlayer(player) {
    const exists = this.players.some((curValue) => curValue.guid.get() === player.guid.get());
    if (!exists) {
      this.players.push(player);
    }
  }
}

export default Game;
