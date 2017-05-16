import {
  SET_ACTIVE_TASK,
  SET_ACTIVE_TASK_STATUS,
  GAME_RETRIEVED,
} from '../actions/types';

const initialState = null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_TASK:
      return action.task;
    case SET_ACTIVE_TASK_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case GAME_RETRIEVED:
      return action.game.tasks.length > 0 ? action.game.tasks[0] : state;
    default:
      return state;
  }
};
