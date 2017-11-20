import config from '../config';

import axios from 'axios';

const PokerAPI = axios.create();

PokerAPI.defaults.baseURL = config.restAPIURL;

export default PokerAPI;
