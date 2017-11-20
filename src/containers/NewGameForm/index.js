import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Input } from '../../components';
import { createGame } from '../../actions/game';

class NewGameForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    actions: PropTypes.shape({
      createGame: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };

    this.createNewGame = this.createNewGame.bind(this);
    this.validateName = this.validateName.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  validateName() {
    return this.state.name === null || this.state.name.length > 0;
  }

  isValid() {
    return this.state.name !== null && this.validateName();
  }

  createNewGame() {
    if (!this.isValid()) return;

    this.props
      .actions
      .createGame(this.state.name)
      .then(newGame => this.props.history.push(`/game/${newGame.id}`));
  }

  render() {
    return (
      <section>
        <Input
          name="gameName"
          style={{ marginBottom: '1rem' }}
          isValid={this.validateName()}
          placeholder="Enter you game name"
          onChange={event => this.setState({ name: event.target.value })}
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

export default connect(
  null,
  dispatch => ({
    actions: bindActionCreators({ createGame }, dispatch),
  }),
)(withRouter(NewGameForm));
