import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import { connect } from 'react-redux';

import { Version, TaskList } from '../../components';
import UserDetails from '../UserDetails';
import NewTaskForm from '../NewTaskForm';


class GameSideMenu extends React.PureComponent {
  static propTypes = {
    game: PropTypes.shape({
      tasks: PropTypes.arrayOf(PropTypes.shape())
    }),
  };

  render() {
    const { game } = this.props;
    return (
      <div className={styles.gameSideMenu}>
        <UserDetails />
        <div className={styles.borderTop}>
          <NewTaskForm />
        </div>
        <div className={styles.borderTop}>
          <div className={styles.title}>Task list:</div>
        </div>
        <div className={styles.scrollable}>
          <TaskList tasks={game.tasks} />
        </div>
        <Version />
      </div>
    );
  }
}

export default connect(
  store => ({
    game: store.game,
  }),
)(GameSideMenu);
