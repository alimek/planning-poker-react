import React from 'react';

import styles from './styles.css';

function Loader() {
  return (
    <div className={styles.spinner}>
      <div className={styles.dot1} />
      <div className={styles.dot2} />
    </div>
  );
}

export default Loader;
