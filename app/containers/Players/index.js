import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react';

import styles from './styles.css';
import { Card } from '../../components';
import AppStore from '../../stores/AppStore';
import CardModel from '../../models/Card';

class Players extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const players = AppStore.game.players;

    return (
      <div className={styles.players}>
        <header className={styles.header}>Players</header>
        <div className={styles.playerList}>
          {players.map((player, index) => {
            const tmpArray = [styles.container];
            if (player.offline.get()) {
              tmpArray.push(styles.offline);
            }

            const style = classNames(tmpArray);

            const card = new CardModel(player.pickedCard.get());

            return (
              <div key={index} className={style}>
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
