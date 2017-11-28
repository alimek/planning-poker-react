import 'babel-polyfill';
import 'font-awesome/css/font-awesome.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'sanitize.css/sanitize.css';
import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import { PageWrapper, App } from './containers';
import {
  Game,
  NewGame,
} from './pages';
import store, { persistor } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <PageWrapper>
          <Route exact path="/" component={App} />
          <Route path="/login" component={NewGame} />
          <Route path="/game/:gameId" component={Game} />
        </PageWrapper>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
