import React from 'react';
import { observer } from 'mobx-react';

import styles from './styles.css';
import { Button } from '../../components';
import AppStore from '../../stores/AppStore';
import { startGame, flip } from '../../actions/GameActions';

class AdminPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  getButtons() {
    if (AppStore.game.tasks.length > 0) {
      return AppStore.game.status.get() !== 'started' ? (
        <Button
          borderColor="grey"
          text="Start Game"
          textColor="black"
          onClick={startGame}
          style={{ width: '7rem', marginRight: '1rem' }}
          backgroundColor="transparent"
        />
      ) : (
        <Button
          borderColor="grey"
          text="Flip"
          onClick={flip}
          textColor="black"
          style={{ width: '7rem' }}
          backgroundColor="transparent"
        />
      );
    }

    return null;
  }

  render() {
    return (
      <div className={styles.adminPanel}>
        {this.getButtons()}
      </div>
    );
  }
}

export default observer(AdminPanel);
