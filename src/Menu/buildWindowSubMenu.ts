import { IDarwinMenuItemConstructorOptions } from './interfaces';

import Strings from '../Strings/strings';

function buildWindowSubMenu(locale: string): IDarwinMenuItemConstructorOptions {
  return {
    label: Strings.getMenuStrings(locale).window_command,
    submenu: [
      {
        label: Strings.getMenuStrings(locale).minimize_command,
        accelerator: 'Command+M',
        selector: 'performMiniaturize:',
      },
      {
        label: Strings.getMenuStrings(locale).close_command,
        accelerator: 'Command+W',
        selector: 'performClose:',
      },
      { type: 'separator' },
      {
        label: Strings.getMenuStrings(locale).bring_all_to_front_command,
        selector: 'arrangeInFront:',
      },
    ],
  };
}

export default buildWindowSubMenu;
