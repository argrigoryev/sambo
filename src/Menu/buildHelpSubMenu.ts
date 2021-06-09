import { MenuItemConstructorOptions, shell } from 'electron';

import Strings from '../Strings/strings';
import UrlHelper from '../Helpers/urlHelper';
import EmailHelper from '../Helpers/emailHelper';

function buildHelpSubMenu(locale: string): MenuItemConstructorOptions {
  return {
    label: Strings.getMenuStrings(locale).help_command,
    submenu: [
      {
        label: Strings.getMenuStrings(locale).russian_site_command,
        click() {
          shell.openExternal(UrlHelper.russianSiteUrl);
        },
      },
      {
        label: Strings.getMenuStrings(locale).moscow_site_command,
        click() {
          shell.openExternal(UrlHelper.moscowSiteUrl);
        },
      },
      {
        label: Strings.getMenuStrings(locale).contact_us_command,
        click() {
          shell.openExternal(EmailHelper.contactEmailUrl);
        },
      },
      {
        label: Strings.getMenuStrings(locale).report_problem_command,
        click() {
          shell.openExternal(UrlHelper.reportProblemUrl);
        },
      },
    ],
  };
}

export default buildHelpSubMenu;
