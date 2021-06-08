import { IDarwinMenuItemConstructorOptions } from './interfaces';

import { MenuStrings } from '../Strings/strings';

function buildWindowSubMenu(): IDarwinMenuItemConstructorOptions {
  return {
    label: MenuStrings.window_command,
    submenu: [
      {
        label: MenuStrings.minimize_command,
        accelerator: 'Command+M',
        selector: 'performMiniaturize:',
      },
      {
        label: MenuStrings.close_command,
        accelerator: 'Command+W',
        selector: 'performClose:',
      },
      { type: 'separator' },
      {
        label: MenuStrings.bring_all_to_front_command,
        selector: 'arrangeInFront:',
      },
    ],
  };
}

export default buildWindowSubMenu;
