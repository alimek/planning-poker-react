import { GAME_CREATED, GAME_LOADED, TASK_CREATED } from '../actions/types';

const initialState = {
  isLoaded: false,
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
      debugger;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          ...action.task,
        ],
      };
    default:
      return state;
  }
};
