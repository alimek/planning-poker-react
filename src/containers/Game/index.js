import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { observer } from 'mobx-react';

import styles from './styles.css';
import { Loader } from '../../components';
import GameSideMenu from '../GameSideMenu';
import GameContext from '../GameContext';
import { getGame } from '../../actions/GameActions';
import { joinGame } from '../../actions/UserActions';
import { initSocketEvent } from '../../services/SocketService';

class Game extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isInitialized: false,
    };
  }

  componentWillMount() {
    const self = this;
    getGame(this.props.params.id)
      .then(() => {
        self.setState({ isInitialized: true });
        initSocketEvent();
      }).then(() => joinGame());
  }

  render() {
    if (!this.state.isInitialized) return <Loader />;

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
    params: store.game,
  }),
)(Game);
