import { MenuItemConstructorOptions, shell } from 'electron';

import { MenuStrings } from '../Strings/strings';
import UrlHelper from '../Helpers/urlHelper';
import EmailHelper from '../Helpers/emailHelper';

const helpSubMenu: MenuItemConstructorOptions = {
  label: MenuStrings.help_command,
  submenu: [
    {
      label: MenuStrings.russian_site_command,
      click() {
        shell.openExternal(UrlHelper.russianSiteUrl);
      },
    },
    {
      label: MenuStrings.moscow_site_command,
      click() {
        shell.openExternal(UrlHelper.moscowSiteUrl);
      },
    },
    {
      label: MenuStrings.contact_us_command,
      click() {
        shell.openExternal(EmailHelper.contactEmailUrl);
      },
    },
    {
      label: MenuStrings.report_problem_command,
      click() {
        shell.openExternal(UrlHelper.reportProblemUrl);
      },
    },
  ],
};

export default helpSubMenu;
