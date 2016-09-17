import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';

export const createGame = (name) => PokerAPI.post('/games', { name })
  .then((newGame) => {
    AppStore.game.fromResponse(newGame);
    return newGame;
  });

export const getGame = (id) => PokerAPI.get(`/games/${id}`)
  .then((game) => AppStore.game.fromResponse(game));

export const startGame = () => PokerAPI.patch(`/games/${AppStore.game.id.get()}/start`)
  .then(() => AppStore.game.status.set('started'));
