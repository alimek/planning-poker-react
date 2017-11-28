import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles.css';
import { Loader } from '../../components';
import GameSideMenu from '../../containers/GameSideMenu';
import GameContext from '../../containers/GameContext';
import { getGame } from '../../actions/game';

class Game extends React.Component {
  static propTypes = {
    game: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape().isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
      getGame: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    const {
      actions,
      match,
      history,
    } = this.props;

    actions
      .getGame(match.params.gameId)
      .catch(() => history.push('/login'));
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
    user: store.user,
  }),
  dispatch => ({
    actions: bindActionCreators({ getGame }, dispatch),
  }),
)(Game);
