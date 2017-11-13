import React from 'react';
import styles from './styles.css';
import { observer } from 'mobx-react';

import { Version, TaskList } from '../../components';
import UserDetails from '../UserDetails';
import AppStore from '../../stores/AppStore';
import NewTaskForm from '../NewTaskForm';


const GameSideMenu = () => (
  <div className={styles.gameSideMenu}>
    <UserDetails />
    <div className={styles.borderTop}>
      <NewTaskForm />
    </div>
    <div className={styles.borderTop}>
      <div className={styles.title}>Task list:</div>
    </div>
    <div className={styles.scrollable}>
      <TaskList tasks={AppStore.game.tasks} />
    </div>
    <Version />
  </div>
);

export default observer(GameSideMenu);
