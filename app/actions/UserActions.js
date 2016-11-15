import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';

const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

export const generateGUID = () => `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((((max - min) + 1)) + min));

export const getStorageUser = () => (window.localStorage.user ? JSON.parse(window.localStorage.user) : null);

export const saveUserToStorage = (user) => {
  window.localStorage.user = JSON.stringify(user.serialize());
};

export const logout = (game) => {
  PokerAPI.get(`/game/${game}/logout/${AppStore.user.id}/`).then(() => {
    window.localStorage.user = null;
    AppStore.user = null;
  });
};

