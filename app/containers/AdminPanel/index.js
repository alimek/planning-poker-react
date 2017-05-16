import React from 'react';
import { observer } from 'mobx-react';
import { connect } from 'react-redux';

import styles from './styles.css';
import { Button } from '../../components';
import AppStore from '../../stores/AppStore';
import { startGame, flip } from '../../actions/GameActions';

class AdminPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    activeTask: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.getButtons = this.getButtons.bind(this);
  }

  getButtons() {
    const gameStatus = AppStore.game.status.get();
    const { activeTask } = this.props;

    if (AppStore.game.tasks.length > 0) {
      if (gameStatus === 'new') {
        return this.getNewGameButtons();
      } else if (gameStatus === 'started' && activeTask.status === 'new') {
        return this.getStartedGameButtons();
      }
    }

    return null;
  }

  getNewGameButtons() {
    return (
      <Button
        borderColor="grey"
        text="Start Game"
        textColor="black"
        onClick={startGame}
        style={{ width: '7rem', marginRight: '1rem' }}
        backgroundColor="transparent"
      />
    );
  }

  getStartedGameButtons() {
    return (
      <Button
        borderColor="grey"
        text="Flip"
        onClick={flip}
        textColor="black"
        style={{ width: '7rem' }}
        backgroundColor="transparent"
      />
    );
  }

  render() {
    return (
      <div className={styles.adminPanel}>
        {this.getButtons()}
      </div>
    );
  }
}

export default observer(connect(
  store => ({
    activeTask: store.activeTask,
  }),
)(AdminPanel));
