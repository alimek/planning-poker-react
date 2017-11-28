import io from 'socket.io-client';

import config from '../config';
import store from '../store';
import { loginToGame } from '../actions/socket';

const socket = io(config.socketURL, {
  autoConnect: false,
  transports: [
    'websocket',
    'polling',
  ],
});

socket.on('connect', () => {
  store.dispatch(loginToGame());
});

export default socket;
