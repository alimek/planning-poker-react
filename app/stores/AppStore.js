import { observable } from 'mobx';

import { Game, User } from '../models';
import { getStorageUser, apiSaveUser } from '../actions/UserActions';

class AppStore {
  constructor() {
    this.isLoaded = observable(false);
    this.game = new Game();
    this.user = new User();
    this.activeTask = observable(null);

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
      apiSaveUser(this.user);
    }
  }
}

export default new AppStore();
