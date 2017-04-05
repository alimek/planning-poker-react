import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import { setActiveTask } from '../../actions/TaskActions';
import AppStore from '../../stores/AppStore';

import styles from './styles.css';

function TaskListItem({ number, task }) {
  const currentTask = AppStore.activeTask.get();

  const buttonClasses = [styles.button];
  const rowClasses = [styles.taskListItem];

  if (currentTask && currentTask.id === task.id) {
    rowClasses.push(styles.buttonActive);
  }

  if (currentTask && currentTask.status === 'flipped') {
    buttonClasses.push(styles.buttonFlipped);
  }

  return (
    <li className={classNames(rowClasses)} onClick={() => { setActiveTask(task.id); }}>
      <span className={styles.number}>{number}.</span>
      <span className={classNames(buttonClasses)}>{task.name}</span>
    </li>
  );
}

TaskListItem.propTypes = {
  task: React.PropTypes.object.isRequired,
  number: React.PropTypes.number.isRequired,
};

export default observer(TaskListItem);
