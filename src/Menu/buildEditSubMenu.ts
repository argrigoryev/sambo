import { IDarwinMenuItemConstructorOptions } from './interfaces';
import Strings from '../Strings/strings';

function buildEditSubMenu(locale: string): IDarwinMenuItemConstructorOptions {
  return {
    label: Strings.getMenu(locale).edit_command,
    submenu: [
      {
        label: Strings.getMenu(locale).undo_command,
        accelerator: 'Command+Z',
        selector: 'undo:',
      },
      {
        label: Strings.getMenu(locale).redo_command,
        accelerator: 'Shift+Command+Z',
        selector: 'redo:',
      },
      { type: 'separator' },
      {
        label: Strings.getMenu(locale).cut_command,
        accelerator: 'Command+X',
        selector: 'cut:',
      },
      {
        label: Strings.getMenu(locale).copy_command,
        accelerator: 'Command+C',
        selector: 'copy:',
      },
      {
        label: Strings.getMenu(locale).paste_command,
        accelerator: 'Command+V',
        selector: 'paste:',
      },
      {
        label: Strings.getMenu(locale).select_all_command,
        accelerator: 'Command+A',
        selector: 'selectAll:',
      },
    ],
  };
}

export default buildEditSubMenu;
