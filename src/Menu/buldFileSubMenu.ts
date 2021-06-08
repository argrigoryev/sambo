import { BrowserWindow, MenuItemConstructorOptions } from 'electron';

import Strings from '../Strings/strings';

function buildFileSubMenu(
  locale: string,
  window: BrowserWindow
): MenuItemConstructorOptions {
  return {
    label: Strings.getMenu(locale).file_command,
    submenu: [
      {
        label: Strings.getMenu(locale).open_command,
        accelerator: 'Ctrl+O',
      },
      {
        label: Strings.getMenu(locale).close_command,
        accelerator: 'Ctrl+W',
        click: () => {
          window.close();
        },
      },
    ],
  };
}

export default buildFileSubMenu;
