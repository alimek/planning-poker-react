import React from 'react';
import { observer } from 'mobx-react';

import styles from './styles.css';
import { Loader } from '../../components';
import GameSideMenu from '../GameSideMenu';
import GameContext from '../GameContext';
import { getGame } from '../../actions/GameActions';

class Game extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    params: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isInitialized: false,
    };
  }

  componentWillMount() {
    const gamePromise = getGame(this.props.params.id);
    if (gamePromise) {
      gamePromise.then(() => this.setState({ isInitialized: true }));
    } else {
      this.setState({ isInitialized: true });
    }
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

export default observer(Game);
