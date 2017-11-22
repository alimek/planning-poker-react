import React from 'react';
import Loader from '../src/components/Loader';

import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Loaders', module)
  .add('Default loader', withNotes('Default color of loader is white, so we should use it on color background')(() =>
  <div style={{ backgroundColor:'orange', padding:'30px'}}>
    <Loader />
  </div>
));
