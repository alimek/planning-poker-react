import React from 'react';
import Card from '../src/components/Card';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';

import CardModel from '../src/models/Card';

const card = new CardModel('0');
const cardSelected = new CardModel('20');

storiesOf('Card', module)
  .add('Card defaulted', withNotes('Default card with value 0')(() =>
  <Card
    isSelected={false}
    card={card}
    isClickable={true}
    onClick={action('clicked')}
  />
  ))
  .add('Card not clickabe', withNotes('Default card with value 0, not clickabe style')(() =>
  <Card
    isSelected={false}
    card={card}
    isClickable={false}
    onClick={action('clicked')}
  />
  ))
  .add('Card selected', withNotes('Selected card with value 20')(() =>
  <Card
    isSelected={true}
    card={cardSelected}
    isClickable={true}
    onClick={action('clicked')}
  />
  ))
