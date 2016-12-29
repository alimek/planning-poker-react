import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';
import { createServer } from '../actions/SocketActions';

export const createGame = (name) => PokerAPI.post('/games', { name })
  .then((newGame) => {
    AppStore.game.fromResponse(newGame);

    return newGame;
  });

export const getGame = (id) => PokerAPI.get(`/games/${id}`)
  .then((game) => {
    AppStore.game.fromResponse(game);
    AppStore.io = createServer();

    if (AppStore.game.tasks.length > 0) {
      AppStore.activeTask.set(AppStore.game.tasks.find((curVal) => curVal.id === game.current_task_id));
      const task = game.tasks.find((curVal) => curVal.id === game.current_task_id);

      task.votes.forEach((taskPlayer) => {
        const player = AppStore.game.getPlayerByGUID(taskPlayer.player.guid);
        player.isReady.set(true);
        if (AppStore.activeTask.value.status === 'flipped') {
          player.pickedCard.set(taskPlayer.value);
        } else {
          player.pickedCard.set(null);
        }
      });
    }
    return game;
  });

export const startGame = () => PokerAPI.patch(`/games/${AppStore.game.id.get()}/start`);

export const onGameStarted = () => {
  AppStore.game.status.set('started');
  AppStore.activeTask.set(AppStore.game.tasks[0]);
  AppStore.game.resetPlayersCards();
};

export const flip = () => PokerAPI.patch(`/games/${AppStore.game.id.get()}/tasks/${AppStore.activeTask.value.id}/flip`);

export const onFlip = (message) => {
  AppStore.activeTask.value.status = message.status;
  AppStore.game.resetPlayersCards();
  AppStore.game.setPickedCards(message.votes, AppStore.activeTask.value.status);
};

