import React from 'react';
import { observer } from 'mobx-react';

import styles from './styles.css';
import avatarIMG from '../../assets/img/default-avatar.jpg';
import { Avatar, Button, Input } from '../../components';
import AppStore from '../../stores/AppStore';

class UserDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    AppStore.game.logout();
  }

  render() {
    return (
      <div className={styles.userDetails}>
        <div className={styles.user}>
          <Avatar src={avatarIMG} />
          <Input
            name="userName"
            isValid
            inputStyle={{ textAlign: 'center' }}
            label="Your name"
            transparent
            value={AppStore.user.name.get() || ''}
            onChange={(e, name) => AppStore.user.name.set(name)}
          />
        </div>
        <div className={styles.buttons}>
          <Button
            textColor="white"
            text="Logout"
            borderColor="white"
            onClick={this.logout}
          />
        </div>
      </div>
    );
  }
}

export default observer(UserDetails);
