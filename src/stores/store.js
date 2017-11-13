import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import reducers from '../reducers';

const config = {
  key: 'root',
  storage,
  whitelist: [
    'user',
    'game',
    'app',
  ]
};

const reducer = persistCombineReducers(config, reducers);

const store = createStore(
  reducer,
  undefined,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store);

export default store;