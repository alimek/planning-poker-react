import store from '../stores/store';
import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';
import Task from '../models/Task';

import {
  SET_ACTIVE_TASK,
  CLEAR_PICKED_CARD,
} from './types';

export const createTask = (name) => PokerAPI.post(`/games/${AppStore.game.id.get()}/tasks`, { name });

export const onTaskCreated = (message) => {
  AppStore.game.tasks.push(Task.fromCreatedTaskEvent(message));
};

export const setActiveTask = (taskId) => {
  PokerAPI.patch((`/games/${AppStore.game.id.get()}/tasks/${taskId}/active`));
};

export const onActiveTaskChange = (message) => {
  const task = AppStore.game.tasks.find((curVal) => curVal.id === message.id);
  task.status = message.status;

  store.dispatch({ type: SET_ACTIVE_TASK, task });

  AppStore.game.resetPlayersCards();
  AppStore.game.setPickedCards(message.votes, task.status);
  store.dispatch({ type: CLEAR_PICKED_CARD });
};

