import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.css';
import CardPicker from '../CardPicker';
import TaskDetails from '../TaskDetails';
import Players from '../Players';
import AdminPanel from '../AdminPanel';

class GameContent extends React.Component {
  static propTypes = {
    game: PropTypes.shape({
      tasks: PropTypes.arrayOf(PropTypes.shape()),
      canPickCard: PropTypes.bool,
    }).isRequired,
  };

  render() {
    const { game } = this.props;

    return (
      <div className={styles.gameContent}>
        <div className={styles.gameArea}>
          {
            game.tasks.length === 0 ?
              <div className={styles.emptyContainer}>
                <span className={styles.emptyText}>There is no task in game.</span>
                <span className={styles.emptyText}>You must add first task to start the game.</span>
              </div> :
              <section className={styles.left}>
                <section className={styles.leftContainer}>
                  <AdminPanel />
                  <Players />
                </section>
                <TaskDetails />
              </section>
          }
        </div>
        {game.canPickCard ? <CardPicker /> : null}
      </div>
    );
  }
}

export default connect(store => ({
  game: store.game,
}))(GameContent);
