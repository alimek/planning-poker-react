import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import styles from './styles.css';
import avatarIMG from '../../assets/img/default-avatar.jpg';
import { Avatar, Input } from '../../components';
import AppStore from '../../stores/AppStore';
import { onLoggedPlayerNameChanged } from '../../actions/user';

class UserDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    router: PropTypes.object.isRequired,
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
            onChange={(e) => onLoggedPlayerNameChanged(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(observer(UserDetails));
