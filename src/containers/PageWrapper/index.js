import React from 'react';

import {
  Container,
} from './styles';

class PageWrapper extends React.Component {
  render() {
    return (
      <Container>{this.props.children}</Container>
    )
  }
}

export default PageWrapper;
