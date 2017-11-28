
import socket from '../utils/socket';
import store from '../store';

export const connectToSocket = () => () => socket.connect();

export const loginToGame = () => () => {
  const { game, user } = store.getState();

  socket.emit('join', {
    gameID: game.id,
    user,
  });
};
