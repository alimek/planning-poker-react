import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function Label({ name, text, small }) {
  const arrayStyles = [];

  if (small) arrayStyles.push(styles.small);

  return (
    <label
      className={classNames(arrayStyles)}
      htmlFor={name}
    >
      {text}
    </label>
  );
}

Label.propTypes = {
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  small: React.PropTypes.bool,
};

export default Label;
