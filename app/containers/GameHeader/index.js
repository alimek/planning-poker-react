import React from 'react';
import { observer } from 'mobx-react';

import styles from './styles.css';
import AppStore from '../../stores/AppStore';

const { game } = AppStore;

const GameHeader = () => (
  <div className={styles.gameHeader}>
    <div className={styles.welcomeMessage}>
      Welcome to game #{game.name.get()}
    </div>
    <div className={styles.gameId}>
      [ID: {game.id.get()}]
    </div>
  </div>
);

export default observer(GameHeader);
