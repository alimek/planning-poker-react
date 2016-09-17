import React from 'react';

import styles from './styles.css';

function PageHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <span className={styles.logoText}>Planning poker - let's plan your sprint!</span>
    </header>
  );
}

export default PageHeader;
