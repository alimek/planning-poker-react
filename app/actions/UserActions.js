import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';
import UserFactory from '../factory/UserFactory';
import Game from '../models/Game';

const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

export const generateGUID = () => `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((((max - min) + 1)) + min));

export const getStorageUser = () => (window.localStorage.user ? JSON.parse(window.localStorage.user) : null);

export const saveUserToStorage = (user) => {
  window.localStorage.user = JSON.stringify(user.serialize());
};

export const createUser = (user) => PokerAPI.post('/players', user.serialize());

export const joinGame = () => PokerAPI.patch(`/games/${AppStore.game.id.get()}/players/${AppStore.user.guid.get()}/add`);

export const onJoinedGame = (message) => {
  const user = UserFactory.createUserFromJoinedGameEvent(message);
  AppStore.game.addPlayer(user);
};

export const logout = () => PokerAPI.get(`/game/${AppStore.game.id.get()}/logout/${AppStore.user.guid.get()}/`).then(() => {
  AppStore.prepareUser();
  saveUserToStorage(AppStore.user);
  AppStore.game = new Game();
});
