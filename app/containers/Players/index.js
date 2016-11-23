import React from 'react';
import { observer } from 'mobx-react';

import styles from './styles.css';
import { Card } from '../../components';
import AppStore from '../../stores/AppStore';
import CardModel from '../../models/Card';

class Players extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { players } = AppStore.game;

    return (
      <div className={styles.players}>
        <header className={styles.header}>Players</header>
        <div className={styles.playerList}>
          {players.map((player, index) => {
            const card = new CardModel(player.pickedCard);
            return (
              <div key={index}>
                <Card
                  isSelected={player.isReady.get()}
                  card={card}
                  isClickable={false}
                />
                <span className={styles.playerName}>{player.name.get()}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default observer(Players);
