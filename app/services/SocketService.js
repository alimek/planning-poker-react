import AppStore from '../stores/AppStore';
import { addTaskToList } from '../actions/TaskActions';

export const initSocketEvent = () => {
  AppStore.io.on('connect', () => {
    AppStore.io.emit('join', {
      gameID: AppStore.game.id.get(),
      user: AppStore.user.serialize(),
    });

    AppStore.io.on('game.task.created', addTaskToList);
  });
};
