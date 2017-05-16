import { combineReducers } from 'redux';

import app from './app';
import activeTask from './activeTask';

export default combineReducers({
  app,
  activeTask,
});
