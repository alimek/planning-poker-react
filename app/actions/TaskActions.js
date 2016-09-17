import PokerAPI from '../services/PokerAPI';
import AppStore from '../stores/AppStore';

export const createTask = (name) => PokerAPI.post(`/games/${AppStore.game.id.get()}/tasks`, { name })
  .then((newTask) => AppStore.game.tasks.push(newTask));
