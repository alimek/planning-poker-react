import axios from 'axios';

import config from '../config';

const PokerAPI = axios.create({
  baseURL: config.restAPIURL,
});

export default PokerAPI;
