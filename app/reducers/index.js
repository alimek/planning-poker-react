import { combineReducers } from 'redux';

import app from './app';
import activeTask from './activeTask';
import user from './user';
import pickedCard from './pickedCard';

export default combineReducers({
  app,
  activeTask,
  user,
  pickedCard,
});
