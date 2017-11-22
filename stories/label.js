import React from 'react';
import Label from '../src/components/Label';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Label', module)
  .add('Label', withNotes('')(() =>
  <Label
    name='label name'
    text='Example label content'
  />
  ));
