import React from 'react';

import {
  NewGameContainer,
  HomeTitle,
} from './styles';
import { Version, PageHeader, CenterContainer } from '../../components';
import NewGameForm from '../NewGameForm';

const NewGame = () => (
  <NewGameContainer>
    <PageHeader />
    <CenterContainer>
      <HomeTitle>Create new game</HomeTitle>
      <NewGameForm />
    </CenterContainer>
    <Version />
  </NewGameContainer>
);

export default NewGame;
