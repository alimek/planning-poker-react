import 'babel-polyfill';
import 'font-awesome/css/font-awesome.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'sanitize.css/sanitize.css';
import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import { App, LanguageProvider, PageWrapper } from './containers';
import {
  Game,
  NewGame,
} from './pages';
import { translationMessages } from './i18n';
import store, { persistor } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <LanguageProvider messages={translationMessages} >
        <BrowserRouter>
          <PageWrapper>
            <Route exact path="/" component={App} />
            <Route path="/login" component={NewGame} />
            <Route path="/game/:gameId" component={Game} />
          </PageWrapper>
        </BrowserRouter>
      </LanguageProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
