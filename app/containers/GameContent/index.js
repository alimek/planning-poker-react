import React from 'react';
import { observer } from 'mobx-react';

import AppStore from '../../stores/AppStore';
import styles from './styles.css';
import CardPicker from '../CardPicker';
import TaskDetails from '../TaskDetails';
import Players from '../Players';
import AdminPanel from '../AdminPanel';

class GameContent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.gameContent}>
        <div className={styles.gameArea}>
          {
            AppStore.game.tasks.length === 0 ?
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
        <CardPicker />
      </div>
    );
  }
}

export default observer(GameContent);
