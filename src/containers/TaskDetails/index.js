import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import styles from './styles.css';

class TaskDetails extends React.Component {
  static propTypes = {
    activeTask: PropTypes.shape(),
  };

  static defaultProps = {
    activeTask: null,
  };

  render() {
    const { activeTask } = this.props;

    if (!activeTask) return null;

    return (
      <div className={styles.taskDetails}>
        <div className={styles.task}>
          Task details
        </div>
        <div>{activeTask.name}</div>
      </div>
    );
  }
}

export default connect(store => ({
  activeTask: store.activeTask,
}))(TaskDetails);
