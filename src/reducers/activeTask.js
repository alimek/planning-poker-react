import {
  SET_ACTIVE_TASK,
  SET_ACTIVE_TASK_STATUS,
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
    default:
      return state;
  }
};
