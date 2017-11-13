import io from 'socket.io-client/dist/socket.io';

import config from '../config';

export const createServer = () => io(config.socketURL, { transports: ['polling'] });
