import 'babel-polyfill';
import 'font-awesome/css/font-awesome.css';
import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import { App, LanguageProvider, PageWrapper, NewGame, Game } from './containers';
import { BrowserRouter, Route } from 'react-router-dom';

import 'sanitize.css/sanitize.css';
import { translationMessages } from './i18n';

import store from './stores/store';

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider messages={translationMessages} >
      <BrowserRouter>
        <PageWrapper>
          <Route exact path="/" component={App} />
          <Route path="/login" component={NewGame} />
          <Route path="/game/:gameId" component={Game} />
        </PageWrapper>
      </BrowserRouter>
    </LanguageProvider>
  </Provider>,
  document.getElementById('app')
);
