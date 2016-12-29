import AppStore from '../stores/AppStore';
import { onTaskCreated, onActiveTaskChange } from '../actions/TaskActions';
import { onGameStarted, onFlip } from '../actions/GameActions';
import { onJoinedGame, onPlayerOffline, onCardPick } from '../actions/UserActions';


export const initSocketEvent = () => {
  AppStore.io.on('connect', () => {
    AppStore.io.emit('join', {
      gameID: AppStore.game.id.get(),
      user: AppStore.user.serialize(),
    });

    AppStore.io.on('game.started', onGameStarted);
    AppStore.io.on('task.created', onTaskCreated);
    AppStore.io.on('player.joined', onJoinedGame);
    AppStore.io.on('player.offline', onPlayerOffline);
    AppStore.io.on('player.cardpicked', onCardPick);
    AppStore.io.on('task.active', onActiveTaskChange);
    AppStore.io.on('task.flip', onFlip);
  });
};
