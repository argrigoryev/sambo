import { BrowserWindow, MenuItemConstructorOptions } from 'electron';

import { MenuStrings } from '../Strings/strings';

function buildFileSubMenu(window: BrowserWindow): MenuItemConstructorOptions {
  return {
    label: MenuStrings.file_command,
    submenu: [
      {
        label: MenuStrings.open_command,
        accelerator: 'Ctrl+O',
      },
      {
        label: MenuStrings.close_command,
        accelerator: 'Ctrl+W',
        click: () => {
          window.close();
        },
      },
    ],
  };
}

export default buildFileSubMenu;
