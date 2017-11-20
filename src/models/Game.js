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
    // this.tasks.replace(data.tasks);
    // data.players.map((playerObj) => {
    //   const player = User.createFromPlayerObj(playerObj);
    //   this.addPlayer(player);
    //   return player;
    // });
  }

  resetPlayersCards() {
    this.players.forEach((player) => {
      player.isReady.set(false);
      player.pickedCard.set(null);
    });
  }

  setPickedCards(votes, taskStatus) {
    votes.forEach((taskPlayer) => {
      const player = this.getPlayerByGUID(taskPlayer.player);
      player.isReady.set(true);
      if (taskStatus === 'flipped') {
        player.pickedCard.set(taskPlayer.value);
      } else {
        player.pickedCard.set(null);
      }
    });
  }

  addPlayer(player) {
    const exists = this.players.some((curValue) => curValue.guid.get() === player.guid.get());
    if (!exists) {
      this.players.push(player);
    }
  }

  greyoutPlayer(playerGUID) {
    const player = this.players.find(
      (curValue) => curValue.guid.get() === playerGUID
    );

    if (player !== undefined) {
      player.offline.set(true);
    }
  }

  activatePlayer(playerModel) {
    const player = this.players.find(
      (curValue) => curValue.guid.get() === playerModel.guid.get()
    );

    if (player !== undefined) {
      player.offline.set(false);
    }
  }

  getPlayerByGUID(playerGUID) {
    return this.players.find((curValue) => curValue.guid.get() === playerGUID);
  }
}

export default Game;
