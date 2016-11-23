import User from '../models/User';

class UserFactory {
  static createUserFromJoinedGameEvent(event) {
    return UserFactory.createUser(event);
  }

  static createFromPlayerObj(playerObj) {
    return UserFactory.createUser(playerObj);
  }

  static createUser(playerObj) {
    const user = new User();
    user.guid.set(playerObj.guid);
    user.name.set(playerObj.name);
    return user;
  }

}

export default UserFactory;
