import {
  GAME_FINISHED,
  SET_ACTIVE_TASK,
  SET_ACTIVE_TASK_STATUS,
  TASK_FLIPPED,
  USER_LOGGED_OUT,
} from '../actions/types';

const initialState = null;

export const STATUS_NEW = 'new';
export const STATUS_FLIPPED = 'flipped';

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_TASK:
      return action.task;
    case SET_ACTIVE_TASK_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case TASK_FLIPPED:
      return action.nextTask;
    case GAME_FINISHED:
    case USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};
