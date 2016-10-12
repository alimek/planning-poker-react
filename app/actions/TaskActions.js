import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';

import Task from '../models/Task';

export const createTask = (name) => PokerAPI.post(`/games/${AppStore.game.id.get()}/tasks`, { name });

export const addTaskToList = (message) => AppStore.game.tasks.push(Task.fromCreatedTaskEvent(message.task));