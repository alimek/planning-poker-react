import React from 'react';
import Input from '../src/components/Input';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Input', module)
  .add('Text input', withNotes('Default text input')(() =>
  <Input
    name="input name"
    style={{ marginBottom: '1rem', width: 'auto' }}
    isValid={true}
    placeholder="Input placeholder"
    onChange={action('key pressed')}
  />
  ))
  .add('Text input invalid', withNotes('Invalid text input')(() =>
  <Input
    name="input name"
    style={{ marginBottom: '1rem', width: 'auto' }}
    isValid={false}
    placeholder="Input placeholder"
    onChange={action('key pressed')}
  />
  ));
