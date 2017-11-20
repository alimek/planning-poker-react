import io from 'socket.io-client';
import config from '../config';

const socket = io(config.socketURL, {
  autoConnect: false,
  transports: [
    'websocket',
  ],
});

export default socket;

// export const initSocketEvent = () => {
//   AppStore.io.on('connect', () => {
//     AppStore.io.emit('join', {
//       gameID: AppStore.game.id.get(),
//       user: AppStore.user.serialize(),
//     });
//
//     AppStore.io.on('game.started', onGameStarted);
//     AppStore.io.on('task.created', onTaskCreated);
//     AppStore.io.on('player.joined', onJoinedGame);
//     AppStore.io.on('player.offline', onPlayerOffline);
//     AppStore.io.on('player.cardpicked', onCardPick);
//     AppStore.io.on('task.active', onActiveTaskChange);
//     AppStore.io.on('task.flip', onFlip);
//     AppStore.io.on('player.nameChanged', onPlayerNameChanged);
//   });
// };
