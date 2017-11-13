import React from 'react';

import styles from './styles.css';

class TaskDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.taskDetails}>
        <div className={styles.task}>
          Task details
        </div>
      </div>
    );
  }
}

export default TaskDetails;
