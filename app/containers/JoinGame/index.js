import React from 'react';
import { browserHistory } from 'react-router';

import styles from './styles.css';
import {
  PageHeader,
  CenterContainer,
  Loader,
  Button,
} from '../../components';
import { getGame } from '../../services/GameService';

class JoinGame extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    params: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      isLoaded: false,
    };

    this.onClickYes = this.onClickYes.bind(this);
    this.onClickNo = this.onClickNo.bind(this);
  }

  componentDidMount() {
    getGame(this.props.params.id)
      .then((game) => {
        this.game = game;
        this.setState({
          name: game.name,
          isLoaded: true,
        });
      });
  }

  onClickNo() {
    browserHistory.replace('/');
  }

  onClickYes() {
    browserHistory.replace(`/game/${this.props.params.id}`);
  }

  render() {
    if (!this.state.isLoaded) return <Loader />;

    return (
      <div className={styles.joinGame}>
        <PageHeader />
        <CenterContainer>
          <header className={styles.header}>
            Are you sure you want to join game #{this.state.game && this.state.game.name}?
          </header>
          <Button
            text="Yes"
            style={{ marginBottom: '1rem' }}
            onClick={this.onClickYes}
          />
          <Button
            borderColor="black"
            textColor="black"
            backgroundColor="transparent"
            text="No"
            onClick={this.onClickNo}
          />
        </CenterContainer>
      </div>
    );
  }
}

export default JoinGame;