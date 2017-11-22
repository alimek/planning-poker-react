import React from 'react';
import Button from '../src/components/Button';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Button', module)
  .add('Primary', withNotes('Primary button')(() =>
  <Button
  textColor="white"
  text="Logout"
  borderColor="white"
  onClick={action('clicked')}>
  </Button>));
