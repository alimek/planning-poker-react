import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
} from './styles';
import store from '../../store';
import { apiSaveUser } from '../../actions/user';

class PageWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.array,
      PropTypes.element,
    ]).isRequired,
    user: PropTypes.shape({
      isSaved: PropTypes.bool,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    const { user } = this.props;

    if (!user.isSaved) {
      store.dispatch(apiSaveUser());
    }
  }

  render() {
    return (
      <Container>{this.props.children}</Container>
    );
  }
}

export default connect(state => ({
  user: state.user,
}))(PageWrapper);
