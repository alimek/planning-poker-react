import config from '../config';

export default class PokerAPI {
  static get(url) {
    return fetch(config.restAPIURL + url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((response) => response.json());
  }

  static post(url, data) {
    return fetch(config.restAPIURL + url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((response) => response.json());
  }

  static patch(url, data) {
    return fetch(config.restAPIURL + url, {
      method: 'patch',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((response) => response.json());
  }
}
