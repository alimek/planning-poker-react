import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.css';
import { Loader } from '../../components';
import GameSideMenu from '../GameSideMenu';
import GameContext from '../GameContext';
import { getGame } from '../../actions/game';

class Game extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const { game } = this.props;
    getGame(game.id);
      // .then(() => {
      //   self.setState({ isInitialized: true });
      //   initSocketEvent();
      // }).then(() => joinGame());
  }

  render() {
    const { game } = this.props;
    const { isLoaded } = game;

    if (!isLoaded) return <Loader />;

    return (
      <div className={styles.game}>
        <GameSideMenu />
        <GameContext />
      </div>
    );
  }
}

export default connect(
  store => ({
    game: store.game,
  }),
)(Game);
