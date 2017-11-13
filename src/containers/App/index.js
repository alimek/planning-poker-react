import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className={styles.App}>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
