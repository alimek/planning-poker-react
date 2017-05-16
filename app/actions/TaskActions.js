import store from '../stores/store';
import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';
import Task from '../models/Task';

import {
  SET_ACTIVE_TASK,
  CLEAR_PICKED_CARD,
} from './types';

export const createTask = (name) => {
  const game = store.getState().game;
  return PokerAPI.post(`/games/${game.id}/tasks`, { name });
};

export const onTaskCreated = (message) => {
  AppStore.game.tasks.push(Task.fromCreatedTaskEvent(message));
};

export const setActiveTask = (taskId) => {
  const game = store.getState().game;
  PokerAPI.patch((`/games/${game.id}/tasks/${taskId}/active`));
};

export const onActiveTaskChange = (message) => {
  const task = AppStore.game.tasks.find((curVal) => curVal.id === message.id);
  task.status = message.status;

  store.dispatch({ type: SET_ACTIVE_TASK, task });

  AppStore.game.resetPlayersCards();
  AppStore.game.setPickedCards(message.votes, task.status);
  store.dispatch({ type: CLEAR_PICKED_CARD });
};
