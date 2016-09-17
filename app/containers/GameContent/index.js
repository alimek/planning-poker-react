import React from 'react';
import { observer } from 'mobx-react';

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
          <section className={styles.left}>
            <AdminPanel />
            <Players />
          </section>
          <TaskDetails />
        </div>
        <CardPicker />
      </div>
    );
  }
}

export default observer(GameContent);
