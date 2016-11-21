import { observable } from 'mobx';

import { Game, User } from '../models';
import { getStorageUser, createUser } from '../actions/UserActions';

class AppStore {
  constructor() {
    this.isLoaded = observable(false);
    this.game = new Game();
    this.user = new User();

    this.init();
  }

  init() {
    this.prepareUser();
  }

  prepareUser() {
    const userData = getStorageUser();
    if (userData) {
      this.user.restoreFromLocalStorage(userData);
    } else {
      this.user.initializeNewUser();
      createUser(this.user);
    }
  }
}

export default new AppStore();
