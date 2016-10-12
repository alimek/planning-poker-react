import io from 'socket.io-client';

import config from '../config';

export const createServer = () => io(config.socketURL);
