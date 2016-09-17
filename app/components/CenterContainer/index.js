import React from 'react';

import styles from './styles.css';

const CenterContainer = ({ children }) => (
  <div className={styles.centerContainer}>
    {children}
  </div>
);

CenterContainer.propTypes = {
  children: React.PropTypes.array.isRequired,
};

export default CenterContainer;
