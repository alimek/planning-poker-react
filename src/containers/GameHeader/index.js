import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import styles from './styles.css';
import { Button } from '../../components';
import { logout } from '../../actions/user';


class GameHeader extends React.Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    game: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    actions: PropTypes.shape({
      logout: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { history, game, actions } = this.props;

    return (
      <div className={styles.gameHeader}>
        <div className={styles.welcomeMessage}>
          Welcome to game #{game.name}
        </div>
        <div className={styles.gameId}>
          [ID: {game.id}]
        </div>
        <div className={styles.logout}>
          <Button
            textColor="white"
            text="Logout"
            borderColor="white"
            onClick={() => actions.logout().then(() => history.push('/'))}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    game: store.game,
  }),
  dispatch => ({
    actions: bindActionCreators({ logout }, dispatch),
  }),
)(withRouter(GameHeader));
