/**
*
* Version
*
*/

import React from 'react';
import config from '../../config';
import styles from './styles.css';

function Version() {
  return (
    <div className={styles.version}>
      Version: {config.version}
    </div>
  );
}

export default Version;
