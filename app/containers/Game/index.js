import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles.css';
import { Loader } from '../../components';
import GameSideMenu from '../GameSideMenu';
import GameContext from '../GameContext';
import { getGame } from '../../actions/GameActions';
import { joinGame } from '../../actions/UserActions';
import { initSocketEvent } from '../../services/SocketService';

class Game extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    params: React.PropTypes.shape({
      is: React.PropTypes.string,
    }).isRequired,
    isLoaded: React.PropTypes.bool.isRequired,
    actions: React.PropTypes.shape({
      joinGame: React.PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    const { params, actions } = this.props;

    getGame(params.id)
      .then(() => {
        initSocketEvent();
        actions.joinGame();
      });
  }

  render() {
    const { isLoaded } = this.props;

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
    isLoaded: store.app.isLoaded,
  }),
  dispatch => ({
    actions: bindActionCreators({ joinGame }, dispatch),
  }),
)(Game);
