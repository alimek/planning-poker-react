import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { connect } from 'react-redux';

import styles from './styles.css';
import { Card } from '../../components';
import CardModel from '../../models/Card';
import { pickCard } from '../../actions/user';

const cards = [
  new CardModel('0'),
  new CardModel('1'),
  new CardModel('2'),
  new CardModel('3'),
  new CardModel('5'),
  new CardModel('8'),
  new CardModel('13'),
  new CardModel('20'),
  new CardModel('?'),
];

const CardPicker = ({ activeTask, pickedCard }) => { // eslint-disable-line react/prefer-stateless-function
  const tmpArray = [styles.cardPicker];

  if (activeTask && activeTask.status === 'flipped') {
    tmpArray.push(styles.flipped);
  }

  return (
    <div className={classNames(tmpArray)}>
      <span className={styles.span}>Pick your card</span>
      <div className={styles.CardsContainer}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            onClick={pickCard}
            isSelected={pickedCard && pickedCard.value === card.value}
          />
        ))}
      </div>
    </div>
  );
};

CardPicker.propTypes = {
  activeTask: PropTypes.object,
  pickedCard: PropTypes.object,
};

export default connect(
  store => ({
    activeTask: store.activeTask,
    pickedCard: store.pickedCard,
  }),
)(CardPicker);
