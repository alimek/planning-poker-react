import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { connect } from 'react-redux';
import { observer } from 'mobx-react';
import { setActiveTask } from '../../actions/TaskActions';

import styles from './styles.css';

function TaskListItem({ number, task, currentTask }) {
  const buttonClasses = [styles.button];
  const rowClasses = [styles.taskListItem];

  if (currentTask && currentTask.id === task.id) {
    rowClasses.push(styles.buttonActive);
  }

  if (currentTask && task.status === 'flipped') {
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
  task: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  currentTask: PropTypes.object,
};

export default observer(connect(
  store => ({
    currentTask: store.activeTask,
  }),
)(TaskListItem));
