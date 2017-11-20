import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from './styles';

class PageWrapper extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.array,
      PropTypes.element,
    ]).isRequired,
  };

  render() {
    return (
      <Container>{this.props.children}</Container>
    );
  }
}

export default PageWrapper;
