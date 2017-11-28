import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import styles from './styles.css';
import { Card } from '../../components';
import CardModel from '../../models/card';

class Players extends React.Component {
  static propTypes = {
    game: PropTypes.shape({}).isRequired,
    user: PropTypes.shape({}).isRequired,
  };

  render() {
    const { game, user } = this.props;
    const { players } = game;

    return (
      <div className={styles.players}>
        <header className={styles.header}>Players</header>
        <div className={styles.playerList}>
          {players.map((player) => {
            const tmpArray = [styles.container];

            if (user.guid === player.guid) {
              return null;
            }

            if (player.offline) {
              tmpArray.push(styles.offline);
            }

            const style = classNames(tmpArray);

            const card = new CardModel(player.pickedCard);

            return (
              <div key={player.guid} className={style}>
                <Card
                  isSelected={player.isReady}
                  card={card}
                  isClickable={false}
                />
                <span className={styles.playerName}>{player.name}</span>
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
  user: store.user,
}))(Players);
