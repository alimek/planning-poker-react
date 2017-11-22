import React from 'react';
import Avatar from '../src/components/Avatar';

import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Avatar', module)
  .add('Avatar basic', () => <Avatar src={'https://t4.ftcdn.net/jpg/01/20/29/45/240_F_120294532_J9nN3IKSW1Oh6uck3GIXCjz6MU5b7ZpG.jpg'}></Avatar>)
  .add('Avatar ico', withNotes('Icon version')(() => <Avatar src={'http://www.icons101.com/icon_ico/id_66584/Hawkeye01.ico'}></Avatar>));
