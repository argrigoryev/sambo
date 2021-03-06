import { BrowserWindow, MenuItemConstructorOptions } from 'electron';

import Strings from '../Strings/strings';

function buildViewSubMenu(
  locale: string,
  window: BrowserWindow
): MenuItemConstructorOptions {
  return {
    label: Strings.getMenuStrings(locale).view_command,
    submenu: [
      {
        label: Strings.getMenuStrings(locale).toggle_full_screen_command,
        accelerator: 'Ctrl+Command+F',
        click: () => {
          window.setFullScreen(!window.isFullScreen());
        },
      },
    ],
  };
}

export default buildViewSubMenu;
