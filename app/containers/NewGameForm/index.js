import React from 'react';
import { withRouter } from 'react-router';

import { Button, Input } from '../../components';
import { createGame } from '../../actions/GameActions';

class NewGameForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };

    this.createNewGame = this.createNewGame.bind(this);
  }

  validateName() {
    return this.state.name === null || this.state.name.length > 0;
  }

  isValid() {
    return this.state.name !== null && this.validateName();
  }

  createNewGame() {
    if (!this.isValid()) return;

    createGame(this.state.name)
      .then((newGame) => this.props.router.push(`/game/${newGame.id}`));
  }

  render() {
    return (
      <section>
        <Input
          name="gameName"
          style={{ marginBottom: '1rem' }}
          isValid={this.validateName()}
          placeholder="Enter you game name"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <Button
          type="button"
          onClick={this.createNewGame}
          text="Create new game"
        />
      </section>
    );
  }
}

export default withRouter(NewGameForm);
