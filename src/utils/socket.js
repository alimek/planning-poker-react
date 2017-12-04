import io from 'socket.io-client';

import config from '../config';
import store from '../store';
import { loginToGame, onJoinedGame } from '../actions/socket';

const socket = io(config.socketURL, {
  autoConnect: false,
  transports: [
    'polling',
  ],
});

socket.on('connect', () => {
  store.dispatch(loginToGame());
  // AppStore.io.on('game.started', onGameStarted);
  // AppStore.io.on('task.created', onTaskCreated);
  socket.on('player.joined', (message) => {
    console.log(message);
    store.dispatch(onJoinedGame(message));
  });
//     AppStore.io.on('player.offline', onPlayerOffline);
//     AppStore.io.on('player.cardpicked', onCardPick);
//     AppStore.io.on('task.active', onActiveTaskChange);
//     AppStore.io.on('task.flip', onFlip);
//     AppStore.io.on('player.nameChanged', onPlayerNameChanged);
});

export default socket;
