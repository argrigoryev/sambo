import { MenuItemConstructorOptions, shell } from 'electron';

import Strings from '../Strings/strings';
import UrlHelper from '../Helpers/urlHelper';
import EmailHelper from '../Helpers/emailHelper';

function buildHelpSubMenu(locale: string): MenuItemConstructorOptions {
  return {
    label: Strings.getMenu(locale).help_command,
    submenu: [
      {
        label: Strings.getMenu(locale).russian_site_command,
        click() {
          shell.openExternal(UrlHelper.russianSiteUrl);
        },
      },
      {
        label: Strings.getMenu(locale).moscow_site_command,
        click() {
          shell.openExternal(UrlHelper.moscowSiteUrl);
        },
      },
      {
        label: Strings.getMenu(locale).contact_us_command,
        click() {
          shell.openExternal(EmailHelper.contactEmailUrl);
        },
      },
      {
        label: Strings.getMenu(locale).report_problem_command,
        click() {
          shell.openExternal(UrlHelper.reportProblemUrl);
        },
      },
    ],
  };
}

export default buildHelpSubMenu;
