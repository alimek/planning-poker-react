import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './styles.css';

const logo = require('../../assets/img/pgssoftware-logo-white-150px.png');

const Card = ({
  onClick,
  card,
  isSelected,
  isClickable = true,
}) => {
  const tmpArray = [styles.card];
  if (isSelected) {
    tmpArray.push(styles.clicked);
  }

  if (isClickable) {
    tmpArray.push(styles.clickable);
  }

  const onClickFunction = () => {
    if (onClick !== undefined) {
      onClick(card);
    }
  };

  const style = classNames(tmpArray);

  return (
    <div className={style} onClick={onClickFunction}>
      <span className={styles.span}>
        {!isClickable && isSelected && card.value === null ? <img className={styles.selectedLogo} src={logo} alt="Logo" /> : null}
        {card.value}
      </span>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  isClickable: PropTypes.bool,
};

export default Card;
