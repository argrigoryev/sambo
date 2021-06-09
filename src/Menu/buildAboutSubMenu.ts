import { app } from 'electron';

import { IDarwinMenuItemConstructorOptions } from './interfaces';

import Strings from '../Strings/strings';

function buildAboutSubMenu(locale: string): IDarwinMenuItemConstructorOptions {
  return {
    label: 'Electron',
    submenu: [
      {
        label: `${Strings.getMenuStrings(locale).about_command} ${app.getName()}`,
        selector: 'orderFrontStandardAboutPanel:',
      },
      { type: 'separator' },
      {
        label: `${Strings.getMenuStrings(locale).hide_command} ${app.getName()}`,
        accelerator: 'Command+H',
        selector: 'hide:',
      },
      {
        label: Strings.getMenuStrings(locale).hide_others_command,
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:',
      },
      {
        label: Strings.getMenuStrings(locale).show_all_command,
        selector: 'unhideAllApplications:',
      },
      { type: 'separator' },
      {
        label: Strings.getMenuStrings(locale).quit_command,
        accelerator: 'Command+Q',
        click: () => {
          app.quit();
        },
      },
    ],
  };
}

export default buildAboutSubMenu;
