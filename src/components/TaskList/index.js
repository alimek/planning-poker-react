import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';

import styles from './styles.css';
import { TaskListItem } from '../';

const TaskList = ({ tasks }) => {
  const getListOrEmpty = () => {
    if (tasks.length === 0) {
      return <span className={styles.emptyText}>There is no tasks</span>;
    }

    return (
      <ul className={styles.list}>
        {tasks.map((task, index) => (
          <TaskListItem key={index} task={task} number={index + 1} />
        ))}
      </ul>
    );
  };

  return (
    <section className={styles.taskList}>
      {getListOrEmpty()}
    </section>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.object.isRequired,
};

export default observer(TaskList);
