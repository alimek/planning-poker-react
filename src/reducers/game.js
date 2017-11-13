import { GAME_CREATED } from '../actions/types';

const initialState = null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_CREATED:
      return action.newGame;
    default:
      return state;
  }
};
