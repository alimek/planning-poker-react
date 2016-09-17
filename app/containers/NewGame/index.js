import React from 'react';

import styles from './styles.css';
import { Version, PageHeader, CenterContainer } from '../../components';
import NewGameForm from '../NewGameForm';

const NewGame = () => (
  <div className={styles.newGame}>
    <PageHeader />
    <CenterContainer>
      <h1 className={styles.HomeTitle}>Create new game</h1>
      <NewGameForm />
    </CenterContainer>
    <Version />
  </div>
);

export default NewGame;
