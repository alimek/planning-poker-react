import store from '../store';
import PokerAPI from '../utils/poker-api';

import {
  SET_PICKED_CARD, USER_LOGGED_OUT, USER_NAME_CHANGED, USER_SAVED,
} from './types';

const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

export const generateGUID = () => `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;

export const getRandomNumber = (min, max) => Math
  .floor(Math.random() * ((((max - min) + 1)) + min));

export const pickCard = (card) => {
  const { activeTask, game, user } = store.getState();

  if (activeTask && activeTask.status === 'flipped') {
    return;
  }

  store.dispatch({ type: SET_PICKED_CARD, card });
  PokerAPI.patch(`/games/${game.id}/players/${user.guid}/pick`, { taskId: activeTask.id, vote: card.value });
};

// export const onCardPick = (message) => {
//   const { game } = store.getState();
//   game.getPlayerByGUID(message.player).isReady.set(true);
// };

export const apiSaveUser = () => async (dispatch) => {
  const { user } = store.getState();

  await PokerAPI.post('/players', {
    guid: user.guid,
    name: user.name,
  });

  dispatch({ type: USER_SAVED });
};

//
// export const joinGame = () => {
//   const { game, user } = store.getState();
//   return PokerAPI.patch(`/games/${game.id.get()}/players/${user.guid.get()}/add`);
// };


export const logout = () => async (dispatch) => {
  // const { game, user } = store.getState();
  // await PokerAPI.get(`/game/${game.id}/logout/${user.guid}`);

  dispatch({ type: USER_LOGGED_OUT });
  return true;
};

// export const onPlayerOffline = (message) => {
//   // game.greyoutPlayer(message.playerID);
// };

// export const patchPlayerName = (name) => async () => {
//   const { user } = store.getState();
//
//   await PokerAPI.patch(`/players/${user.guid}`, { name });
// };

export const onLoggedPlayerNameChanged = name => (dispatch) => {
  dispatch({ type: USER_NAME_CHANGED, name });
};

// export const onPlayerNameChanged = action(player => {
//   const { game } = store.getState();
//
//   const gamePlayer = find(game.players, { guid: player.guid });
//   gamePlayer.name = player.name;
// });
