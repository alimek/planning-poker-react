import React from 'react';

import styles from './styles.css';
import NewTaskForm from '../NewTaskForm';

class TaskDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.taskDetails}>
        <div className={styles.task}>
          Task details
        </div>
        <NewTaskForm />
      </div>
    );
  }
}

export default TaskDetails;
