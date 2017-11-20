import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router';

import styles from './styles.css';
import avatarIMG from '../../assets/img/default-avatar.jpg';
import { Avatar, Input } from '../../components';
import { onLoggedPlayerNameChanged } from '../../actions/user';

class UserDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    userName: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      onLoggedPlayerNameChanged: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { userName, actions } = this.props;

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
            value={userName}
            onChange={e => actions.onLoggedPlayerNameChanged(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    userName: store.user.name,
  }),
  dispatch => ({
    actions: bindActionCreators({ onLoggedPlayerNameChanged }, dispatch),
  }),
)(withRouter(UserDetails));
