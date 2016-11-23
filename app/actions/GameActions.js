import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';
import { createServer } from '../actions/SocketActions';

export const createGame = (name) => PokerAPI.post('/games', { name })
  .then((newGame) => {
    AppStore.game.fromResponse(newGame);

    return newGame;
  });

export const getGame = (id) => PokerAPI.get(`/games/${id}`)
  .then((game) => {
    AppStore.game.fromResponse(game);
    AppStore.io = createServer();

    return game;
  });

export const startGame = () => PokerAPI.patch(`/games/${AppStore.game.id.get()}/start`);

export const onGameStarted = () => {
  AppStore.game.status.set('started');
};

// TODO:
// export const flip = () => PokerAPI.patch(`/games/${AppStore.game.id.get()}/flip`)
//   .then(() => {});

