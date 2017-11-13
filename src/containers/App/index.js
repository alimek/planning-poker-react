import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.css';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  componentDidMount() {

  }

  render() {
    return (
      <div className={styles.App}>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  store => ({

  }),
)(App);
