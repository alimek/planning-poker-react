import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

import { Version, TaskList } from '../../components';
import UserDetails from '../UserDetails';
import NewTaskForm from '../NewTaskForm';


const GameSideMenu = ({ tasks }) => (
  <div className={styles.gameSideMenu}>
    <UserDetails />
    <div className={styles.borderTop}>
      <NewTaskForm />
    </div>
    <div className={styles.borderTop}>
      <div className={styles.title}>Task list:</div>
    </div>
    <div className={styles.scrollable}>
      <TaskList tasks={tasks} />
    </div>
    <Version />
  </div>
);

GameSideMenu.propTypes = {
  tasks: React.PropTypes.array.isRequired,
};

export default connect(
  store => ({
    tasks: store.game.tasks,
  }),
)(GameSideMenu);
