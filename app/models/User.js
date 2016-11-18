import { observable } from 'mobx';

import { generateGUID, getRandomNumber, saveUserToStorage } from '../actions/UserActions';

class User {
  constructor() {
    this.id = observable(null);
    this.name = observable(null);
  }

  serialize() {
    return {
      id: this.id.get(),
      name: this.name.get(),
    };
  }

  initializeNewUser() {
    this.id.set(generateGUID());
    this.name.set(`Anonymous #${getRandomNumber(0, 1000)}`);
    saveUserToStorage(this);
  }

  restoreFromLocalStorage(userData) {
    this.id.set(userData.id);
    this.name.set(userData.name);
  }

}

export default User;
