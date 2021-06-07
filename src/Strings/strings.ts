import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

import en from './locales/en/messages.json';
import ru from './locales/ru/messages.json';

export interface IStrings extends LocalizedStringsMethods {
  test: string;
}

const Strings: IStrings = new LocalizedStrings({ en, ru });

export default Strings;
