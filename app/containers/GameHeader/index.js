import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import styles from './styles.css';
import { Button } from '../../components';
import { logout } from '../../actions/UserActions';

const GameHeader = ({ router, game }) => (
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
        onClick={() => logout().then(() => router.push('/'))}
      />
    </div>
  </div>
);

GameHeader.propTypes = {
  router: React.PropTypes.object.isRequired,
  game: React.PropTypes.shape({
    name: React.PropTypes.string,
    id: React.PropTypes.string,
  }).isRequired,
};

export default connect(
  store => ({
    game: store.game,
  }),
)(withRouter(GameHeader));
