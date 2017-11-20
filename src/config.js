export default {
  version: '1.0',
  restAPIURL: process.env.POKER_API_URL,
  env: process.env.NODE_ENV || 'development',
  socketURL: process.env.POKER_SOCKET_URL,
};
