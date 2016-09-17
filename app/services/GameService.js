import PokerAPI from './PokerAPI';

export const getGame = (id) => PokerAPI.get(`/games/${id}`);
