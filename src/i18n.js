import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

import enTranslationMessages from './translations/en.json';

export const appLocales = [
  'en',
];

addLocaleData(enLocaleData);

const formatTranslationMessages = (messages) => {
  const formattedMessages = {};
  for (const message of messages) { // eslint-disable-line no-restricted-syntax
    formattedMessages[message.id] = message.message || message.defaultMessage;
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
};
