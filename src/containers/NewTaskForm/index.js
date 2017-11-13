import React from 'react';

import styles from './styles.css';
import { Input } from '../../components';
import { createTask } from '../../actions/task';

class NewTaskForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.state = {
      taskName: '',
    };

    this.addTask = this.addTask.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  onKeyPressed(event) {
    if (event.keyCode === 13) {
      this.addTask();
    }
  }

  addTask() {
    if (!this.isValid()) return;

    createTask(this.state.taskName)
      .then(() => {
        this.setState({ taskName: '' });
      });
  }

  isNameValid() {
    return this.state.taskName === '' || this.state.taskName.length > 0;
  }

  isValid() {
    return this.state.taskName !== '' && this.isNameValid();
  }

  render() {
    return (
      <section className={styles.newTaskForm}>
        <Input
          value={this.state.taskName}
          name="newTaskName"
          isValid={this.isNameValid()}
          onChange={(event) => this.setState({ taskName: event.target.value })}
          placeholder="Enter task name"
          style={{ border: 0 }}
          inputStyle={styles.input}
          onKeyPressed={this.onKeyPressed}
        />
      </section>
    );
  }
}

export default NewTaskForm;
