import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const config = {
  key: 'root',
  storage,
  whitelist: [
    'user',
    'game',
    'app',
    'activeTask',
  ],
};

const reducer = persistCombineReducers(config, reducers);

const store = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export default store;
