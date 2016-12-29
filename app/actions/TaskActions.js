import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';

import Task from '../models/Task';

export const createTask = (name) => PokerAPI.post(`/games/${AppStore.game.id.get()}/tasks`, { name });

export const onTaskCreated = (message) => {
  AppStore.game.tasks.push(Task.fromCreatedTaskEvent(message));
};

export const setActiveTask = (taskId) => {
  PokerAPI.patch((`/games/${AppStore.game.id.get()}/tasks/${taskId}/active`));
};

export const onActiveTaskChange = (message) => {
  AppStore.activeTask.set(AppStore.game.tasks.find((curVal) => curVal.id === message.id));
  AppStore.activeTask.value.status = message.status;
  AppStore.game.resetPlayersCards();
  AppStore.game.setPickedCards(message.votes, AppStore.activeTask.value.status);
};

