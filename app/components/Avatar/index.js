import React from 'react';

import styles from './styles.css';

function Avatar({ src }) {
  return (
    <img className={styles.avatar} src={src} alt="Avatar" />
  );
}

Avatar.propTypes = {
  src: React.PropTypes.string.isRequired,
};

export default Avatar;
