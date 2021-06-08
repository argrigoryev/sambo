import LocalizedStrings from 'react-localization';

import { IMenuStrings, IStrings } from './interfaces';

import en from './locales/en/messages.json';
import ru from './locales/ru/messages.json';
import ru_menu from './locales/ru/menu.json';

const Strings: IStrings = new LocalizedStrings({ en, ru });

export default Strings;

// TODO: support en_menu
export const MenuStrings: IMenuStrings = ru_menu;
