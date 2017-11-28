export default {
  version: '1.0',
  restAPIURL: process.env.REACT_APP_POKER_API_URL,
  env: process.env.NODE_ENV || 'development',
  socketURL: process.env.REACT_APP_POKER_SOCKET_URL,
};
