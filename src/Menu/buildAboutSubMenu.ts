import { app } from 'electron';

import { IDarwinMenuItemConstructorOptions } from './interfaces';

import Strings from '../Strings/strings';

function buildAboutSubMenu(locale: string): IDarwinMenuItemConstructorOptions {
  return {
    label: 'Electron',
    submenu: [
      {
        label: `${Strings.getMenu(locale).about_command} ${app.getName()}`,
        selector: 'orderFrontStandardAboutPanel:',
      },
      { type: 'separator' },
      {
        label: `${Strings.getMenu(locale).hide_command} ${app.getName()}`,
        accelerator: 'Command+H',
        selector: 'hide:',
      },
      {
        label: Strings.getMenu(locale).hide_others_command,
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:',
      },
      {
        label: Strings.getMenu(locale).show_all_command,
        selector: 'unhideAllApplications:',
      },
      { type: 'separator' },
      {
        label: Strings.getMenu(locale).quit_command,
        accelerator: 'Command+Q',
        click: () => {
          app.quit();
        },
      },
    ],
  };
}

export default buildAboutSubMenu;
