
import socket from '../utils/socket';
import store from '../store';
import { PLAYER_JOINED_GAME } from './types';
import PokerAPI from '../utils/poker-api';

export const connectToSocket = () => () => socket.connect();

export const loginToGame = () => async () => {
  const { game, user } = store.getState();

  try {
    await PokerAPI.patch(`/games/${game.id}/players/${user.guid}/add`);
    socket.emit('join', {
      gameID: game.id,
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const onJoinedGame = message => ({ type: PLAYER_JOINED_GAME, player: message.user });
