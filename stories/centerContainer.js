import React from 'react';
import Center from '../src/components/CenterContainer';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Containers', module)
  .add('Center Container', withNotes('A container')(() =>
  <Center>
    Example of content
  </Center>
));
