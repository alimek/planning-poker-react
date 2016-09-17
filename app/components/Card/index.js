import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

const logo = require('../../assets/img/pgssoftware-logo-white-150px.png');

function Card({ onClick, card, isSelected, isClickable = true }) {
  const tmpArray = [styles.card];
  if (isSelected) {
    tmpArray.push(styles.clicked);
  }

  if (isClickable) {
    tmpArray.push(styles.clickable);
  }

  const style = classNames(tmpArray);

  return (
    <div className={style} onClick={onClick}>
      <span className={styles.span}>
        {!isClickable && isSelected ? <img className={styles.selectedLogo} src={logo} alt="Logo" /> : null}
        {card.value}
      </span>
    </div>
  );
}

Card.propTypes = {
  card: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
  isSelected: React.PropTypes.bool,
  isClickable: React.PropTypes.bool,
};

export default Card;
