import {
  GAME_CREATED,
  GAME_RETRIEVED,
} from '../actions/types';

const initialState = null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_CREATED:
    case GAME_RETRIEVED:
      return action.game;
    default:
      return state;
  }
};
