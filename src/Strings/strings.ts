import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

import en from './locales/en/messages.json';
import ru from './locales/ru/messages.json';

export interface IStrings extends LocalizedStringsMethods {
  help_command: string;
  moscow_site_command: string;
  russian_site_command: string;
  contact_us_command: string;
  report_problem_command: string;
}

const Strings: IStrings = new LocalizedStrings({ en, ru });

export default Strings;
