import React from 'react';
import { setActiveTask } from '../../actions/TaskActions';
import { Button } from '../../components';

import styles from './styles.css';

function TaskListItem({ task }) {
  return (
    <li className={styles.taskListItem}>
      <Button onClick={() => { setActiveTask(task.id); }} text={task.name} />
    </li>
  );
}

TaskListItem.propTypes = {
  task: React.PropTypes.object.isRequired,
};

export default TaskListItem;
