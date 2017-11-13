import { observable } from 'mobx';

import { generateGUID, getRandomNumber, saveUserToStorage } from '../actions/UserActions';

class User {
  constructor() {
    this.guid = observable(null);
    this.name = observable(null);
    this.pickedCard = observable(null);
    this.isReady = observable(false);
    this.offline = observable(false);
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

  static createUserFromJoinedGameEvent(event) {
    return User.createUser(event);
  }

  static createFromPlayerObj(playerObj) {
    const user = User.createUser(playerObj);
    user.offline.set(playerObj.offline);
    return user;
  }

  static createUser(playerObj) {
    const user = new User();
    user.guid.set(playerObj.guid);
    user.name.set(playerObj.name);
    return user;
  }

}

export default User;
