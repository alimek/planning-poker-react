import AppStore from '../stores/AppStore';
import { onTaskCreated } from '../actions/TaskActions';
import { onGameStarted } from '../actions/GameActions';
import { onJoinedGame } from '../actions/UserActions';


export const initSocketEvent = () => {
  AppStore.io.on('connect', () => {
    AppStore.io.emit('join', {
      gameID: AppStore.game.id.get(),
      user: AppStore.user.serialize(),
    });

    AppStore.io.on('game.started', onGameStarted);
    AppStore.io.on('task.created', onTaskCreated);
    AppStore.io.on('player.joined', onJoinedGame);
  });
};
