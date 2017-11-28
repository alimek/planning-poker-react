import {
  GAME_CREATED,
  GAME_LOADED,
  GAME_STARTED, PLAYER_JOINED_GAME,
  SET_ACTIVE_TASK,
  TASK_CREATED,
  USER_LOGGED_OUT,
} from '../actions/types';
import { STATUS_FLIPPED } from './activeTask';

export const STATUS_STARTED = 'started';

const initialState = {
  isLoaded: false,
  canPickCard: false,
  players: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_CREATED:
      return {
        ...state,
        ...action.newGame,
        isLoaded: true,
      };

    case GAME_LOADED:
      return {
        ...state,
        ...action.game,
        isLoaded: true,
      };
    case TASK_CREATED:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.task,
        ],
      };
    case GAME_STARTED:
      return {
        ...state,
        status: STATUS_STARTED,
        canPickCard: true,
      };
    case SET_ACTIVE_TASK:
      return {
        ...state,
        canPickCard: action.task.status !== STATUS_FLIPPED,
      };
    case PLAYER_JOINED_GAME:
      return {
        ...state,
        players: [
          ...state.players,
          action.player,
        ],
      };
    case USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};
