import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  NewGameContainer,
  HomeTitle,
} from './styles';
import { Version, PageHeader, CenterContainer } from '../../components';
import NewGameForm from '../../containers/NewGameForm';

class NewGame extends React.Component {
  constructor(props) {
    super(props);

    const { history, game } = this.props;

    if (game.isLoaded) {
      history.push(`/game/${game.id}`);
    }
  }

  render() {
    return (
      <NewGameContainer>
        <PageHeader />
        <CenterContainer>
          <HomeTitle>Create new game</HomeTitle>
          <NewGameForm />
        </CenterContainer>
        <Version />
      </NewGameContainer>
    )
  }
}

export default connect(
  store => ({
    game: store.game,
  }),
)(withRouter(NewGame));
