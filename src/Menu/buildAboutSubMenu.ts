import { app } from 'electron';

import { IDarwinMenuItemConstructorOptions } from './interfaces';

import { MenuStrings } from '../Strings/strings';

function buildAboutSubMenu(): IDarwinMenuItemConstructorOptions {
  return {
    label: 'Electron',
    submenu: [
      {
        label: `${MenuStrings.about_command} ${app.getName()}`,
        selector: 'orderFrontStandardAboutPanel:',
      },
      { type: 'separator' },
      {
        label: `${MenuStrings.hide_command} ${app.getName()}`,
        accelerator: 'Command+H',
        selector: 'hide:',
      },
      {
        label: MenuStrings.hide_others_command,
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:',
      },
      {
        label: MenuStrings.show_all_command,
        selector: 'unhideAllApplications:',
      },
      { type: 'separator' },
      {
        label: MenuStrings.quit_command,
        accelerator: 'Command+Q',
        click: () => {
          app.quit();
        },
      },
    ],
  };
}

export default buildAboutSubMenu;
