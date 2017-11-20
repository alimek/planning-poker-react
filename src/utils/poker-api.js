import axios from 'axios';

import config from '../config';

const PokerAPI = axios.create();

PokerAPI.defaults.baseURL = config.restAPIURL;

export default PokerAPI;
