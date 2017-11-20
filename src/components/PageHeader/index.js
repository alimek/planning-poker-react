import React from 'react';

import {
  Header,
  Logo,
  LogoText,
} from './styles';

const PageHeader = () => (
  <Header>
    <Logo />
    <LogoText>{'Planning poker - let\'s plan your sprint!'}</LogoText>
  </Header>
);

export default PageHeader;
