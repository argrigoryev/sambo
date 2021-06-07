import { MenuItemConstructorOptions, shell } from 'electron';

import Strings from '../Strings/strings';
import UrlHelper from '../Helpers/urlHelper';
import EmailHelper from '../Helpers/emailHelper';

const subMenuHelp: MenuItemConstructorOptions = {
  label: Strings.help_command,
  submenu: [
    {
      label: Strings.russian_site_command,
      click() {
        shell.openExternal(UrlHelper.russianSiteUrl);
      },
    },
    {
      label: Strings.moscow_site_command,
      click() {
        shell.openExternal(UrlHelper.moscowSiteUrl);
      },
    },
    {
      label: Strings.contact_us_command,
      click() {
        shell.openExternal(EmailHelper.contactEmailUrl);
      },
    },
    {
      label: Strings.report_problem_command,
      click() {
        shell.openExternal(UrlHelper.reportProblemUrl);
      },
    },
  ],
};

export default subMenuHelp;
