import { debounce, find } from 'lodash';
import { action } from 'mobx';

import store from '../stores/store';
import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';
import User from '../models/User';
import Game from '../models/Game';

import {
  SET_PICKED_CARD,
} from './types';

const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

export const generateGUID = () => `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((((max - min) + 1)) + min));

export const getStorageUser = () => (window.localStorage.user ? JSON.parse(window.localStorage.user) : null);

export const saveUserToStorage = (user) => {
  window.localStorage.user = JSON.stringify(user.serialize());
};

export const pickCard = (card) => {
  const activeTask = store.getState().activeTask;

  if (activeTask && activeTask.status === 'flipped') {
    return;
  }

  store.dispatch({ type: SET_PICKED_CARD, card });
  PokerAPI.patch(`/games/${AppStore.game.id.get()}/players/${AppStore.user.guid.get()}/pick`, { taskId: activeTask.id, vote: card.value });
};

export const onCardPick = (message) => {
  AppStore.game.getPlayerByGUID(message.player).isReady.set(true);
};

export const apiSaveUser = (user) => PokerAPI.post('/players', user.serialize());

export const joinGame = () => PokerAPI.patch(`/games/${AppStore.game.id.get()}/players/${AppStore.user.guid.get()}/add`);

export const onJoinedGame = (message) => {
  const user = User.createUserFromJoinedGameEvent(message);
  AppStore.game.addPlayer(user);
  AppStore.game.activatePlayer(user);
};

export const logout = () => PokerAPI.get(`/game/${AppStore.game.id.get()}/logout/${AppStore.user.guid.get()}/`).then(() => {
  AppStore.prepareUser();
  saveUserToStorage(AppStore.user);
  AppStore.game = new Game();
});

export const onPlayerOffline = (message) => {
  AppStore.game.greyoutPlayer(message.playerID);
};

export const patchPlayerName = debounce(
  name => PokerAPI.patch(`/players/${AppStore.user.guid.get()}`, { name }),
  500
);

export const onLoggedPlayerNameChanged = name => {
  AppStore.user.name.set(name);
  patchPlayerName(name);
};

export const onPlayerNameChanged = action(player => {
  const gamePlayer = find(AppStore.game.players, { guid: player.guid });
  gamePlayer.name = player.name;
});
