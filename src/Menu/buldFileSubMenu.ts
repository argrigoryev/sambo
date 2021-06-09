import { BrowserWindow, MenuItemConstructorOptions } from 'electron';

import Strings from '../Strings/strings';

function buildFileSubMenu(
  locale: string,
  window: BrowserWindow
): MenuItemConstructorOptions {
  return {
    label: Strings.getMenuStrings(locale).file_command,
    submenu: [
      {
        label: Strings.getMenuStrings(locale).open_command,
        accelerator: 'Ctrl+O',
      },
      {
        label: Strings.getMenuStrings(locale).close_command,
        accelerator: 'Ctrl+W',
        click: () => {
          window.close();
        },
      },
    ],
  };
}

export default buildFileSubMenu;
