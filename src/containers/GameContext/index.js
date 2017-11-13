import React from 'react';
import { observer } from 'mobx-react';

import styles from './styles.css';
import GameHeader from '../GameHeader';
import GameContent from '../GameContent';

class GameContext extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.gameContext}>
        <GameHeader />
        <GameContent />
      </div>
    );
  }
}

export default observer(GameContext);
