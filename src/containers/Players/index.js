import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import styles from './styles.css';
import { Card } from '../../components';
import CardModel from '../../models/card';

class Players extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { game } = this.props;
    const { players } = game;

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

export default connect(store => ({
  game: store.game,
}))(Players);
