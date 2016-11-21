import { observable } from 'mobx';

import { generateGUID, getRandomNumber, saveUserToStorage } from '../actions/UserActions';

class User {
  constructor() {
    this.guid = observable(null);
    this.name = observable(null);
    this.pickedCard = observable(null);
  }

  serialize() {
    return {
      guid: this.guid.get(),
      name: this.name.get(),
    };
  }

  initializeNewUser() {
    this.guid.set(generateGUID());
    this.name.set(`Anonymous #${getRandomNumber(0, 1000)}`);
    saveUserToStorage(this);
  }

  restoreFromLocalStorage(userData) {
    this.guid.set(userData.guid);
    this.name.set(userData.name);
  }

}

export default User;
