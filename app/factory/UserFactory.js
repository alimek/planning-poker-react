import User from '../models/User';

class UserFactory {
  static createUserFromJoinedGameEvent(event) {
    const user = new User();
    user.guid.set(event.guid);
    user.name.set(event.name);
  }
}

export default UserFactory;
