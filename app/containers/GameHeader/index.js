import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import styles from './styles.css';
import AppStore from '../../stores/AppStore';
import { Button } from '../../components';
import { logout } from '../../actions/UserActions';

const { game } = AppStore;


const GameHeader = ({ router }) => (
  <div className={styles.gameHeader}>
    <div className={styles.welcomeMessage}>
      Welcome to game #{game.name.get()}
    </div>
    <div className={styles.gameId}>
      [ID: {game.id.get()}]
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
};

export default observer(withRouter(GameHeader));
