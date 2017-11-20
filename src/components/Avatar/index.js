import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Avatar = ({ src }) => <img className={styles.avatar} src={src} alt="Avatar" />;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar;
