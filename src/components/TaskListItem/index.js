import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { setActiveTask } from '../../actions/task';

import styles from './styles.css';

function TaskListItem({ number, task, currentTask, actions }) {
  const buttonClasses = [styles.button];
  const rowClasses = [styles.taskListItem];

  if (currentTask && currentTask.id === task.id) {
    rowClasses.push(styles.buttonActive);
  }

  if (task.status === 'flipped') {
    buttonClasses.push(styles.buttonFlipped);
  }

  return (
    <li className={classNames(rowClasses)} onClick={() => actions.setActiveTask(task)}>
      <span className={styles.number}>{number}.</span>
      <span className={classNames(buttonClasses)}>{task.name}</span>
    </li>
  );
}

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  currentTask: PropTypes.object,
  actions: PropTypes.shape({
    setActiveTask: PropTypes.func,
  }).isRequired,
};

export default connect(
  store => ({
    currentTask: store.activeTask,
  }),
  dispatch => ({
    actions: bindActionCreators({ setActiveTask }, dispatch),
  }),
)(TaskListItem);
