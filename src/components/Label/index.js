import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './styles.css';

const Label = ({ name, text, small }) => {
  const arrayStyles = [];

  if (small) arrayStyles.push(styles.small);

  return (
    <label // eslint-disable-line jsx-a11y/label-has-for
      className={classNames(arrayStyles)}
      htmlFor={name}
    >
      {text}
    </label>
  );
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

Label.defaultProps = {
  small: false,
};

export default Label;
