import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';
import CardPicker from '../CardPicker';
import TaskDetails from '../TaskDetails';
import Players from '../Players';
import AdminPanel from '../AdminPanel';

const GameContent = ({ game }) => (
  <div className={styles.gameContent}>
    <div className={styles.gameArea}>
      {
        game.tasks.length === 0 ?
          (
          <div className={styles.emptyContainer}>
            <span className={styles.emptyText}>There is no task in game.</span>
            <span className={styles.emptyText}>You must add first task to start the game.</span>
          </div>
          ) :
          (
          <section className={styles.left}>
            <section className={styles.leftContainer}>
              <AdminPanel />
              <Players />
            </section>
            <TaskDetails />
          </section>
          )
      }
    </div>
    {game.status === 'started' ? <CardPicker /> : null}
  </div>
);

GameContent.propTypes = {
  game: React.PropTypes.object.isRequired,
};

export default connect(
  store => ({
    game: store.game,
  }),
)(GameContent);
