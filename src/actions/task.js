import store from '../store';
import PokerAPI from '../utils/poker-api';

import {
  SET_ACTIVE_TASK,
  TASK_CREATED,
} from './types';

export const createTask = name => async (dispatch) => {
  const { game } = store.getState();
  try {
    const response = await PokerAPI.post(`/games/${game.id}/tasks`, { name });
    const task = response.data;

    dispatch({ type: TASK_CREATED, task });
    return task;
  } catch (e) {
    throw new Error('Failed creating game');
  }
};

export const onTaskCreated = (message) => {
  // const { game } = store.getState();
  // game.tasks.push(Task.fromCreatedTaskEvent(message));
};

export const setActiveTask = task => async (dispatch) => {
  const { game } = store.getState();

  await PokerAPI.patch((`/games/${game.id}/tasks/${task.id}/active`));

  dispatch({ type: SET_ACTIVE_TASK, task });
};

export const onActiveTaskChange = (message) => {
  // const { game } = store.getState();
  // const task = game.tasks.find(curVal => curVal.id === message.id);
  // task.status = message.status;
  //
  // store.dispatch({ type: SET_ACTIVE_TASK, task });
  //
  // game.resetPlayersCards();
  // game.setPickedCards(message.votes, task.status);
  // store.dispatch({ type: CLEAR_PICKED_CARD });
};

