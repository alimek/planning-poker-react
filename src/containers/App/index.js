import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './styles.css';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    const { history, game } = this.props;

    let url = null;

    if (game) {
      url = `/game/${game.id}`;
    } else {
      url = '/login';
    }

    history.push(url);
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
    game: store.game,
  }),
)(withRouter(App));
