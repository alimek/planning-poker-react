import React from 'react';

import styles from './styles.css';

function TaskListItem({ task }) {
  return (
    <li className={styles.taskListItem}>
      {task.name}
    </li>
  );
}

TaskListItem.propTypes = {
  task: React.PropTypes.object.isRequired,
};

export default TaskListItem;
