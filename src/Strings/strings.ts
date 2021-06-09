import LocalizedStrings from 'react-localization';

import { IMenuStrings, IStrings } from './interfaces';

import en from './locales/en/messages.json';
import en_menu from './locales/en/menu.json';
import ru from './locales/ru/messages.json';
import ru_menu from './locales/ru/menu.json';

export default class Strings {
  static ui: IStrings = new LocalizedStrings({ en, ru });

  static getMenuStrings(locale: string): IMenuStrings {
    switch (locale) {
      case 'ru':
        return ru_menu;
      case 'en':
      default:
        return en_menu;
    }
  }
}
