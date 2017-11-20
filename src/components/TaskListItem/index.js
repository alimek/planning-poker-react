import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { setActiveTask } from '../../actions/task';

import styles from './styles.css';

const TaskListItem = ({
  number,
  task,
  currentTask,
  actions,
}) => {
  const buttonClasses = [styles.button];
  const rowClasses = [styles.taskListItem];

  if (currentTask && currentTask.id === task.id) {
    rowClasses.push(styles.buttonActive);
  }

  if (task.status === 'flipped') {
    buttonClasses.push(styles.buttonFlipped);
  }

  return (
    <li //eslint-disable-line
      className={classNames(rowClasses)}
      onClick={() => actions.setActiveTask(task)}
      onKeyPress={() => actions.setActiveTask(task)}
    >
      <span className={styles.number}>{number}.</span>
      <span className={classNames(buttonClasses)}>{task.name}</span>
    </li>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.shape().isRequired,
  number: PropTypes.number.isRequired,
  currentTask: PropTypes.shape(),
  actions: PropTypes.shape({
    setActiveTask: PropTypes.func,
  }).isRequired,
};

TaskListItem.defaultProps = {
  currentTask: null,
};

export default connect(
  store => ({
    currentTask: store.activeTask,
  }),
  dispatch => ({
    actions: bindActionCreators({ setActiveTask }, dispatch),
  }),
)(TaskListItem);
