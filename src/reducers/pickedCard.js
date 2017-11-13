import {
  SET_PICKED_CARD,
  CLEAR_PICKED_CARD,
} from '../actions/types';

const initialState = null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PICKED_CARD:
      return action.card;
    case CLEAR_PICKED_CARD:
      return initialState;
    default:
      return state;
  }
};
