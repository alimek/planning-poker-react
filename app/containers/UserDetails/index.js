import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import styles from './styles.css';
import avatarIMG from '../../assets/img/default-avatar.jpg';
import { Avatar, Button, Input } from '../../components';
import AppStore from '../../stores/AppStore';
import { logout } from '../../actions/UserActions';

class UserDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    logout().then(() => this.props.router.push('/'));
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

export default withRouter(observer(UserDetails));
