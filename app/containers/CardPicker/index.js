import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';

import styles from './styles.css';
import { Card } from '../../components';
import CardModel from '../../models/Card';
import AppStore from '../../stores/AppStore';
import { pickCard } from '../../actions/UserActions';

const cards = [
  new CardModel('1/2'),
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

class CardPicker extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onCardClick(card) {
    if (AppStore.activeTask.value.status !== 'flipped') {
      pickCard(card);
    }
  }


  render() {
    const tmpArray = [styles.cardPicker];
    const pickedCard = AppStore.user.pickedCard.get();

    if (AppStore.activeTask.activeTask !== undefined && AppStore.activeTask.value.status === 'flipped') {
      tmpArray.push(styles.flipped);
    }

    if (AppStore.game.status.get() !== 'started') return null;

    return (
      <div className={classNames(tmpArray)}>
        <span className={styles.span}>Pick your card</span>
        <div className={styles.CardsContainer}>
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              onClick={this.onCardClick}
              isSelected={pickedCard && pickedCard.value === card.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default observer(CardPicker);
