import { BrowserWindow, MenuItemConstructorOptions } from 'electron';

import { MenuStrings } from '../Strings/strings';

function buildViewSubMenu(window: BrowserWindow): MenuItemConstructorOptions {
  return {
    label: MenuStrings.view_command,
    submenu: [
      {
        label: MenuStrings.toggle_full_screen_command,
        accelerator: 'Ctrl+Command+F',
        click: () => {
          window.setFullScreen(!window.isFullScreen());
        },
      },
    ],
  };
}

export default buildViewSubMenu;
