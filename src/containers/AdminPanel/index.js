import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles.css';
import { Button } from '../../components';
import { startGame, flip } from '../../actions/game';
import { STATUS_STARTED } from '../../reducers/game';

class AdminPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    activeTask: PropTypes.object,
    game: PropTypes.shape({
      tasks: PropTypes.arrayOf(PropTypes.shape()),
      status: PropTypes.string,
    }).isRequired,
    actions: PropTypes.shape({
      flip: PropTypes.func,
      startGame: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    activeTask: null,
  };

  render() {
    const { activeTask, game, actions } = this.props;
    const { status } = game;

    if (game.tasks.length === 0) return null;

    return (
      <div className={styles.adminPanel}>
        {
          activeTask && activeTask.status === 'new' && status === STATUS_STARTED ?
            <Button
              borderColor="grey"
              text="Flip"
              onClick={actions.flip}
              textColor="black"
              style={{ width: '7rem' }}
              backgroundColor="transparent"
            /> :
            <Button
              borderColor="grey"
              text="Start Game"
              textColor="black"
              onClick={actions.startGame}
              style={{ width: '7rem', marginRight: '1rem' }}
              backgroundColor="transparent"
            />
        }
      </div>
    );
  }
}

export default connect(
  store => ({
    activeTask: store.activeTask,
    game: store.game,
  }),
  dispatch => ({
    actions: bindActionCreators({ startGame, flip}, dispatch),
  }),
)(AdminPanel);
