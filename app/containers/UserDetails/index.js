import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import styles from './styles.css';
import avatarIMG from '../../assets/img/default-avatar.jpg';
import { Avatar, Input } from '../../components';
import AppStore from '../../stores/AppStore';

class UserDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    router: React.PropTypes.object.isRequired,
  };

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
      </div>
    );
  }
}

export default withRouter(observer(UserDetails));
