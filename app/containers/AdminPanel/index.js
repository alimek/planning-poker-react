import React from 'react';
import { observer } from 'mobx-react';
import { connect } from 'react-redux';

import styles from './styles.css';
import { Button } from '../../components';
import { startGame, flip } from '../../actions/GameActions';

const AdminPanel = ({ game }) => (
  <div className={styles.adminPanel}>
    {
      game.status === 'new' ?
        (
        <Button
          borderColor="grey"
          text="Start Game"
          textColor="black"
          onClick={startGame}
          style={{ width: '7rem', marginRight: '1rem' }}
          backgroundColor="transparent"
        />
        ) :
        (
        <Button
          borderColor="grey"
          text="Flip"
          onClick={flip}
          textColor="black"
          style={{ width: '7rem' }}
          backgroundColor="transparent"
        />
        )
    }
  </div>
);

AdminPanel.propTypes = {
  activeTask: React.PropTypes.object,
  game: React.PropTypes.object,
};

export default observer(connect(
  store => ({
    game: store.game,
    activeTask: store.activeTask,
  }),
)(AdminPanel));
