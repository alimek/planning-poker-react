import AppStore from '../stores/AppStore';
import { onTaskCreated } from '../actions/TaskActions';
import { gameStarted } from '../actions/GameActions';


export const initSocketEvent = () => {
  AppStore.io.on('connect', () => {
    AppStore.io.emit('join', {
      gameID: AppStore.game.id.get(),
      user: AppStore.user.serialize(),
    });

    AppStore.io.on('game.started', gameStarted);
    AppStore.io.on('task.created', onTaskCreated);
  });
};
